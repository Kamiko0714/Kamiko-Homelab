export const translations = {
  en: {
    welcome: "SELECT INTERFACE",
    booting: "System booting...",
    desc: "Infrastructure & IT Operations",
    hello: "Hello, I'm Dewa Athallah Putra Kamiko 👋",
    intro: "Focusing on System Reliability, Automation, and Technical Troubleshooting.",
    about_text: `I am a Computer Science graduate with a strong interest in infrastructure management and operational efficiency. Through my experience as a DevOps Trainee and Laboratory Assistant, I am accustomed to handling various layers of systems, from physical server maintenance (bare-metal) to exploring Kubernetes cluster management. I focus on applying Root Cause Analysis (RCA) to every technical challenge I encounter and actively seek opportunities to automate routine tasks through scripting. For me, maintaining system stability is not just about fixing problems, but about building documented and measurable procedures to ensure smoother operations.`,
    formal: "Professional Links",
    nonformal: "Social & Communication",
    exp_now: "Now",
    
    skills_title: "Technical Stack",
    projects_title: "Technical Projects",
    exp_title: "Experience",
    edu_title: "Education",
    cert_title: "Credentials",
    contact_title: "Get in Touch",
    connect_title: "Experience",
    
    form_name: "Name",
    form_message: "Message",
    form_send: "Send to Email",
    prof_network: "Professional Network",
    view_certs: "View all the certificates I have",
    download_cv: "Download CV",
    
    project_1_title: "Server Automator",
    project_1_desc: "Automated High Availability Cluster",
    project_1_detail: "Detailed implementation of a High Availability Server using automated scripts to ensure 99.9% uptime and seamless failover.",
    
    project_2_title: "Voltnesia Smart Monitoring",
    project_2_desc: "IoT Monitoring Electricity Cost",
    project_2_detail: "Building an IoT-based monitoring system using MQTT protocol for real-time electricity cost monitoring and data logging.",
    
    project_3_title: "K8s Cluster Ops",
    project_3_desc: "Infrastructure as Code",
    project_3_detail: "Setting up a production-ready Kubernetes cluster with Infrastructure as Code (Terraform & Ansible) for scalable applications.",
    
    project_4_title: "Home-Lab",
    project_4_desc: "A lean, GitOps-driven K3s infrastructure utilizing high-performance observability via VictoriaMetrics and secure tunneling for seamless, edge-ready application delivery.",
    project_4_detail:  `1. Orchestration & Compute
Engine: K3s over Docker. Leveraging a lightweight Kubernetes distribution to maximize CPU/RAM overhead for workloads rather than the control plane.

Runtime: Standardized Docker runtime for consistent container lifecycle management across all nodes.

2. Storage & Data Locality (The "Local-First" Strategy)
Persistence: Utilizing Node Affinity and Local Persistent Volumes instead of distributed SDS (like Longhorn) to eliminate network-induced latency.

Database Ops: Managing SQLite at scale. This simplifies state management and removes the need for complex DB clustering, shifting the focus to robust file-based backup strategies (e.g., S3 snapshots).

3. Continuous Delivery (GitOps Workflow)
Source of Truth: Internal Gitea instance serving as the central manifest repository.

Automation: FluxCD for declarative infrastructure. All cluster states—from ingress to apps—are automatically reconciled, ensuring "Zero-Touch" deployments and preventing configuration drift.

4. Networking & Secure Access
Connectivity: Tunnel-based Ingress (e.g., Cloudflare/Tailscale) replaces traditional LoadBalancers or MetalLB.

Security: Reduces the attack surface by eliminating public-facing ports, allowing the cluster to remain behind a NAT while staying accessible.

5. High-Efficiency Observability
Telemetry: VictoriaMetrics for time-series data and VictoriaLogs for log aggregation.

Performance: This stack provides significantly higher ingestion rates and better compression ratios compared to Prometheus/Loki, making it ideal for resource-constrained environments.

Visualization: Grafana as the unified pane of glass for both system metrics and application logs.`,
    
    view_detail: "View Detail",
    visit_repo: "Repo",
    jp_status: "In addition to developing technical skills, the administrator is currently learning a foreign language. Translations are assisted by AI, so some expressions may sound less natural. Thank you for your understanding.",
    lang_status: "English is my second language, self-taught through media. I'm capable of technical communication, though I'm still refining my fluency.",
    info : "Info : English is my second language, self-taught through media. \n        I'm capable of technical communication, though I'm still refining my fluency."
  },

  id: {
    welcome: "PILIH ANTARMUKA",
    booting: "Sistem memuat...",
    desc: "Infrastruktur & Operasional IT",
    hello: "Halo, saya Dewa Athallah Putra Kamiko 👋",
    intro: "Fokus pada Keandalan Sistem, Otomatisasi, dan Troubleshooting Teknis.",
    about_text: "Saya adalah lulusan Informatika yang memiliki minat besar pada pengelolaan infrastruktur dan efisiensi operasional. Melalui pengalaman sebagai DevOps Trainee dan Laboratory Assistant, saya terbiasa menangani berbagai lapisan sistem, mulai dari pemeliharaan fisik server (bare-metal) hingga eksplorasi manajemen klaster Kubernetes. Saya fokus pada penerapan Root Cause Analysis (RCA) untuk setiap kendala teknis yang dihadapi dan aktif mencari peluang untuk mengotomatisasi tugas rutin melalui skrip. Bagi saya, menjaga stabilitas sistem bukan hanya soal memperbaiki masalah, tetapi tentang membangun prosedur yang terdokumentasi dan terukur agar operasional berjalan lebih lancar.",
    formal: "Tautan Profesional",
    nonformal: "Sosial & Komunikasi",
    exp_now: "Sekarang",

    skills_title: "Keahlian Teknis",
    projects_title: "Proyek Teknikal",
    exp_title: "Pengalaman",
    edu_title: "Pendidikan",
    cert_title: "Sertifikasi",
    contact_title: "Hubungi Saya",
    connect_title: "Pengalaman",
    
    form_name: "Nama",
    form_message: "Pesan",
    form_send: "Kirim ke Email",
    prof_network: "Jaringan Profesional",
    view_certs: "Lihat semua sertifikat yang saya miliki",
    download_cv: "Unduh CV",
    
    project_1_title: "Server Automator",
    project_1_desc: "Otomatisasi HA Cluster",
    project_1_detail: "Implementasi mendalam Server High Availability menggunakan skrip otomatis untuk memastikan uptime 99.9% dan failover tanpa hambatan.",
    
    project_2_title: "Voltnesia Smart Monitoring",
    project_2_desc: "IoT Monitoring Biaya Listrik",
    project_2_detail: "Membangun sistem pemantauan berbasis IoT menggunakan protokol MQTT untuk kontrol biaya listrik real-time dan pencatatan data.",
    
    project_3_title: "K8s Cluster Ops",
    project_3_desc: "Infrastructure as Code",
    project_3_detail: "Membangun klaster Kubernetes siap produksi dengan Infrastructure as Code (Terraform & Ansible) untuk aplikasi yang skalabel.",
    
    project_4_title: "Home-Lab",
    project_4_desc: "Infrastruktur Hybrid-Cloud berbasis K3s yang mengoptimalkan GitOps Workflow dan High-Efficiency Observability tanpa ketergantungan pada external load balancer.",
    project_4_detail: `1. Compute & Orchestration
Engine: Menggunakan K3s di atas Docker runtime untuk meminimalkan footprint memori tanpa mengurangi fungsionalitas Kubernetes.

Provisioning: Fokus pada lightweight virtualization, cocok untuk lingkungan edge atau on-premise dengan resource terbatas.

2. Storage Strategy (The "No-Longhorn" Approach)
Data Locality: Menggunakan Local Persistent Volumes dengan Node Affinity.

Engine: SQLite. Dari sisi Ops, ini mengurangi kompleksitas replikasi data di layer network, namun menuntut kebijakan backup file-level yang ketat (misal: menggunakan CronJob untuk snapshot db ke S3/Minio).

3. GitOps & Automation (The Pipeline)
Source of Truth: Gitea bertindak sebagai internal Git server.

Reconciliation: FluxCD melakukan sinkronisasi otomatis. IT Ops hanya perlu mengelola manifest YAML di repo; perubahan infrastruktur terjadi secara deklaratif tanpa kubectl apply manual.

4. Connectivity & Networking
Ingress Path: Menggantikan MetalLB dengan Tunneling (seperti Cloudflare Tunnel atau Tailscale).

Security: Menghilangkan attack surface karena tidak ada port publik yang terbuka (No Public IP needed).

5. Full-Stack Observability
Metrics & Logs: Mengintegrasikan VictoriaMetrics (TSDB) dan VictoriaLogs.

Efficiency: Solusi ini jauh lebih hemat storage dan CPU dibandingkan Prometheus/Loki, memungkinkan retensi data yang lebih lama pada hardware yang sama.`,
    
    view_detail: "Lihat Detail",
    visit_repo: "Repo",
    jp_status: "Selain mengembangkan kemampuan teknis, administrator juga sedang mempelajari bahasa asing. Proses penerjemahan saat ini dibantu oleh AI, sehingga mungkin terdapat ungkapan yang kurang alami. Terima kasih atas pengertiannya.",
    lang_status: "Bahasa Indonesia (Native). Siap untuk kolaborasi profesional.",
    info : "Info : Bahasa Indonesia (Native). Siap untuk kolaborasi profesional."
  },

  jp: {
  welcome: "インターフェースを選択",
  booting: "システム起動中...",
  desc: "インフラストラクチャ & ITオペレーション",
  hello: "こんにちは、デワ・アタラ・プトラ・カミコです 👋",
  intro: "システムの信頼性、自動化、および技術的なトラブルシューティングに注力しています。",
  about_text: "私はインフラ管理と運用効率に強い関心を持つコンピュータサイエンス専攻の卒業生です。DevOpsトレーニーおよびラボアシスタントとしての経験を通じて、物理サーバー（ベアメタル）の保守からKubernetesクラスター管理まで、さまざまなシステムレイヤーに対応してきました。技術的な課題に対しては常にRoot Cause Analysis（RCA）を適用し、スクリプトによる定型業務の自動化にも積極的に取り組んでいます。私にとってシステムの安定性を維持することは、単に問題を修正することではなく、運用をより円滑にするための文書化された測定可能なプロセスを構築することです。",
  formal: "プロフェッショナルリンク",
  nonformal: "ソーシャル & コミュニケーション",
  exp_now: "現在",
  
  skills_title: "技術スタック",
  projects_title: "技術プロジェクト",
  exp_title: "職務経験",
  edu_title: "学歴",
  cert_title: "資格・認定",
  contact_title: "お問い合わせ",
  connect_title: "経験",

  form_name: "お名前",
  form_message: "メッセージ",
  form_send: "メールを送信",
  prof_network: "プロフェッショナルネットワーク",
  view_certs: "取得済みの資格をすべて表示",
  download_cv: "CVをダウンロード",
  
  project_1_title: "Server Automator",
  project_1_desc: "高可用性クラスターの自動化",
  project_1_detail: "自動スクリプトを活用して高可用性サーバーを実装し、99.9％のアップタイムとシームレスなフェイルオーバーを実現しました。",
  
  project_2_title: "Voltnesia Smart Monitoring",
  project_2_desc: "IoTによる電力コスト監視",
  project_2_detail: "MQTTプロトコルを活用し、電力コストをリアルタイムで監視・記録するIoTベースのモニタリングシステムを構築しました。",
  
  project_3_title: "K8s Cluster Ops",
  project_3_desc: "Infrastructure as Code",
  project_3_detail: "TerraformおよびAnsibleを用いたInfrastructure as Codeにより、スケーラブルなアプリケーション向けの本番環境対応Kubernetesクラスターを構築しました。",
    
  project_4_title: "Security Auditor",
  project_4_desc: "システムヘルスメトリクス",
  project_4_detail: "システムの脆弱性をスキャンし、ヘルスメトリクスレポートを提供する自動セキュリティ監査ツールを開発しました。",
  
  view_detail: "詳細を見る",
  visit_repo: "リポジトリ",
  jp_status: "管理者は技術力の向上に努めるとともに、現在は外国語も学習しております。翻訳は技術を活用しているため、不自然な表現が含まれる場合がございます。何卒ご理解のほどよろしくお願いいたします。",
  lang_status: "現在、日本語を勉強中です。AI翻訳を利用しているため、表現が不自然な場合があるかもしれませんが、技術と日本語の両面で継続的にスキル向上に努めています。",
  info : "Info : 現在、日本語を勉強中です。\n        AI翻訳を利用しているため、表現が不自然な場合があるかもしれませんが、\n        技術と日本語の両面で継続的にスキル向上に努めています。"
}
};