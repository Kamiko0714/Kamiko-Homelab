# 🚀 Kamiko Hybrid-Cloud Homelab

This repository manages a **K3s Cluster** infrastructure using a **GitOps** approach powered by **FluxCD**. The primary focus of this project is resource optimization on constrained hardware (Dual Intel i3, 8GB RAM) through strict workload segregation.

---

## 🏗️ Architecture Overview

* **Cloud:** Azure VM (Control Plane / Main Portfolio).
* **Local Cluster:** K3s on Dual Intel i3 Nodes.
* **Network:** MikroTik hAP ax2 & Cloudflare Tunnel (Zero Trust).
* **GitOps:** FluxCD & Gitea (Self-hosted).
* **Monitoring:** VictoriaMetrics, Grafana, & VictoriaLogs.

---

## 📂 Folder Structure

| Path | Description |
| :--- | :--- |
| `apps/main-porto` | Portfolio Website (Vite + React) hosted on Azure VM. |
| `infrastructure/` | IaC Scripts (Terraform & Ansible). |
| `cluster/manifests` | K8s Manifests managed by FluxCD. |
| `docs/` | Architectural documentation & technical PDFs. |

---

## 🛠️ Infrastructure SOP (Standard Operating Procedure)

As the **Infra & DevOps Engineer**, all deployments must adhere to the following rules to ensure cluster stability:

### 1. Workload Placement (The Twin-Node Rule)
Workloads are divided based on node labels to maintain RAM stability.
* **Node 1 (Front-End & GitOps):** Dedicated to Vue/Next.js pods, Gitea, FluxCD, and Tunnels.
* **Node 2 (Back-End & Data):** Dedicated to Node.js/Go pods, SQLite (Local Path), and the Monitoring Stack.

It is **mandatory** to include a `nodeSelector` in every manifest:
```yaml
spec:
  nodeSelector:
    type: backend # or frontend
```

### 2. Resource Guardrails & Limits
Every Pod **MUST** have RAM resource limits to prevent *Node Freeze* (OOM):
* **Limit:** `512Mi` (Maximum).
* **Request:** `128Mi` (Minimum).

### 3. Persistence & Database (SQLite)
Since Longhorn is not utilized, data is stored locally on **Node 2**.
* **Mounting:** Databases must be mounted to the `/data` path.
* **WAL Mode:** Applications (Go/Node.js) must enable *Write-Ahead Logging* to avoid `database is locked` errors.
* **Safety:** Do not delete Backend Pods without verifying that the `PersistentVolumeClaim` (PVC) is correctly bound to the local path.

### 4. Monitoring & Observability
* **Scrape Interval:** Grafana dashboards are set to refresh every 30 seconds.
* **Logging:** Use VictoriaLogs or `kubectl logs` for initial troubleshooting.
* **Retention:** Logs are automatically purged after 7 days.

---

## 📋 Maintenance Checklist

| Task | Schedule | Command / Action |
| :--- | :--- | :--- |
| **Image Pruning** | Saturday Night | Run `docker image prune -a` on both nodes. |
| **SQLite Backup** | Post-Session | Copy `.sqlite` files from Node 2 to Node 1/Local. |
| **Health Check** | Daily | Monitor RAM consumption via Grafana Dashboard. |
| **Flux Sync** | Real-time | Verify status via `flux get kustomizations`. |

---