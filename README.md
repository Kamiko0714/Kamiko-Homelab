# Kamiko Hybrid-Cloud Homelab

Repositori ini mengelola portofolio pribadi dan infrastruktur homelab saya menggunakan prinsip Infrastructure as Code (IaC).

## 🚀 Arsitektur
- **Cloud:** Azure VM (Control Plane)
- **Local:** MikroTik hAP ax2 & Dual Intel i3 Nodes (K3s Cluster)
- **Network:** Cloudflare Tunnel (Zero Trust)
- **Automation:** Terraform, Ansible, GitHub Actions

## 📂 Struktur Folder
- `apps/main-porto`: Website portofolio utama (Vite + React).
- `apps/devops-dashboard`: Dashboard monitoring lab (Under Construction).
- `infrastructure/`: Script Terraform & Ansible.
- `docs/`: Dokumentasi teknis & PDF.