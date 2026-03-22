export const translations = {
  en: {
    welcome: "SELECT INTERFACE",
    booting: "System booting...",
    desc: "Systems & Infrastructure Engineer",
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

    project_1_title: "Home-Lab (Proxmox VE K3s Cluster)",
    project_1_desc: "A high-availability virtualization-ready K3s infrastructure hosted on Proxmox VE, leveraging GitOps automation, optimized local storage affinity, and secure tunnel-based ingress.",
    project_1_detail: `1. Compute & Virtualization Layer\n
    Hypervisor: Proxmox VE (Debian-based). Managing the lifecycle of K3s nodes via Virtual Machines (VMs) or LXC containers.\n
    Node Provisioning: Using Cloud-Init for automated Ubuntu Server VM deployment, ensuring consistent OS baseline.\n
    Resource Allocation: Implementing CPU pinning and RAM ballooning to ensure dedicated performance for VictoriaMetrics and Gitea.\n\n
    2. Storage & Node Affinity (The Proxmox Twist)\n
    Hardware Passthrough: For SQLite performance, we use Disk Passthrough or high-speed ZFS Local Storage to specific VMs.\n
    Affinity Mapping: Node Affinity in Kubernetes is strictly mapped to the VM ID holding the physical disk mount, ensuring SQLite data integrity.\n\n
    3. GitOps & Operational Workflow\n
    Gitea & FluxCD: Hosted within the cluster. This creates an "Infrastructure as Code" (IaC) environment where Proxmox handles Hardware and FluxCD handles the Software State.\n\n
    4. Networking (Zero Trust Approach)\n
    Internal Bridge: Utilizing Proxmox's Linux Bridge (vmbr0) for inter-VM communication.\n
    Edge Connectivity: Tunnels established at the VM level, bypassing the need for complex NAT/Port Forwarding or MetalLB.\n\n
    5. Maintenance & Resilience\n
    Backup Strategy: Utilizing Proxmox Backup Server (PBS) for full VM snapshots, complemented by VictoriaLogs for audit trails.\n
    High Availability: Provides VM-level HA, automatically restarting nodes on another host if hardware fails.`,

    project_2_title: "Home-Lab (Bare Metal K3s Cluster)",
    project_2_desc: "A lean, GitOps-driven K3s infrastructure utilizing high-performance observability via VictoriaMetrics and secure tunneling for seamless application delivery.",
    project_2_detail: `1. Orchestration & Compute\n
    Engine: K3s over Docker. Leveraging a lightweight distribution to maximize resources for workloads rather than the control plane.\n
    Runtime: Standardized Docker runtime for consistent container lifecycle management.\n\n
    2. Storage & Data Locality\n
    Persistence: Utilizing Node Affinity and Local Persistent Volumes instead of distributed SDS to eliminate network latency.\n
    Database Ops: Managing SQLite at scale with robust file-based backup strategies (e.g., S3 snapshots).\n\n
    3. Continuous Delivery (GitOps Workflow)\n
    Source of Truth: Internal Gitea instance as the central manifest repository.\n
    Automation: FluxCD for declarative infrastructure, ensuring Zero-Touch deployments and preventing configuration drift.\n\n
    4. Networking & Secure Access\n
    Connectivity: Tunnel-based Ingress (Cloudflare/Tailscale) replaces traditional LoadBalancers or MetalLB.\n
    Security: Reduces attack surface by eliminating public-facing ports (No Public IP needed).\n\n
    5. High-Efficiency Observability\n
    Telemetry: VictoriaMetrics and VictoriaLogs for high-performance ingestion and compression.\n
    Visualization: Grafana as the unified pane for system metrics and logs.`,

    project_3_title: "Voltnesia Smart Monitoring",
    project_3_desc: "IoT Monitoring Electricity Cost",
    project_3_detail: "Building an IoT-based monitoring system using MQTT protocol for real-time electricity cost monitoring and data logging.",

    view_detail: "View Detail",
    visit_repo: "Repo",
    jp_status: "In addition to developing technical skills, the administrator is currently learning a foreign language. Translations are assisted by AI, so some expressions may sound less natural. Thank you for your understanding.",
    lang_status: "English is my second language, self-taught through media. I'm capable of technical communication, though I'm still refining my fluency.",
    info: "Info: English is my second language, self-taught through media. I'm capable of technical communication, though I'm still refining my fluency."
  },

  id: {
    welcome: "PILIH ANTARMUKA",
    booting: "Sistem memuat...",
    desc: "Systems & Infrastructure Engineer",
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

    project_1_title: "Home-Lab (Proxmox VE K3s Cluster)",
    project_1_desc: "Infrastruktur K3s berbasis virtualisasi Proxmox VE yang mengoptimalkan efisiensi resource melalui GitOps (FluxCD) dan observabilitas performa tinggi tanpa dependensi pada storage terdistribusi.",
    project_1_detail: `1. Layer Virtualisasi & Compute\n
    Hypervisor: Proxmox VE. Mengelola lifecycle VM atau LXC.\n
    Node Provisioning: Cloud-Init untuk deployment Ubuntu Server VM yang konsisten.\n
    Resource Management: CPU Pinning dan RAM Allocation untuk performa maksimal VictoriaMetrics dan Gitea.\n\n
    2. Strategi Storage & Data Locality\n
    Persistence: Local Storage ZFS/LVM via Disk Passthrough ke VM.\n
    Node Affinity: Kubernetes nodeAffinity memastikan Pod SQLite selalu berjalan di VM yang terikat fisik dengan disk storage.\n\n
    3. Workflow GitOps & Otomasi\n
    Source of Truth: Gitea sebagai pusat repositori manifest.\n
    Reconciliation: FluxCD mensinkronisasi state Gitea dengan cluster (IaC).\n\n
    4. Konektivitas & Networking "Zero Trust"\n
    Ingress Path: Tunneling (Cloudflare/Tailscale) menggantikan MetalLB atau port forwarding manual.\n
    Isolation: Jaringan internal via Linux Bridge (vmbr0) Proxmox.\n\n
    5. Observabilitas & Backup\n
    Telemetry: VictoriaMetrics dan VictoriaLogs untuk efisiensi resource.\n
    Safety Net: Proxmox Backup Server (PBS) untuk snapshot level VM.`,

    project_2_title: "Home-Lab (Bare Metal K3s Cluster)",
    project_2_desc: "Infrastruktur Hybrid-Cloud berbasis K3s yang mengoptimalkan GitOps Workflow dan High-Efficiency Observability tanpa ketergantungan pada external load balancer.",
    project_2_detail: `1. Compute & Orchestration\n
    Engine: K3s di atas Docker runtime untuk meminimalkan footprint memori.\n
    Provisioning: Fokus pada lightweight virtualization untuk lingkungan edge.\n\n
    2. Storage Strategy (No-Longhorn)\n
    Data Locality: Local Persistent Volumes dengan Node Affinity.\n
    Engine: SQLite dengan manajemen backup file-level yang ketat (S3 snapshots).\n\n
    3. GitOps & Automation\n
    Source of Truth: Gitea sebagai internal Git server.\n
    Reconciliation: FluxCD untuk perubahan infrastruktur secara deklaratif.\n\n
    4. Connectivity & Networking\n
    Ingress Path: Tunneling (Cloudflare/Tailscale) sebagai gerbang masuk.\n
    Security: Menghilangkan attack surface tanpa Public IP terbuka.\n\n
    5. Full-Stack Observability\n
    Metrics & Logs: Integrasi VictoriaMetri cs dan VictoriaLogs yang hemat resource.\n
    Visualization: Grafana sebagai dashboard terpadu.`,

    project_3_title: "Voltnesia Smart Monitoring",
    project_3_desc: "Monitoring Biaya Listrik Berbasis IoT",
    project_3_detail: "Membangun sistem pemantauan berbasis IoT menggunakan protokol MQTT untuk monitoring biaya listrik secara real-time dan pencatatan data.",

    view_detail: "Lihat Detail",
    visit_repo: "Repo",
    jp_status: "Selain mengembangkan kemampuan teknis, administrator juga sedang mempelajari bahasa asing. Proses penerjemahan saat ini dibantu oleh AI, sehingga mungkin terdapat ungkapan yang kurang alami. Terima kasih atas pengertiannya.",
    lang_status: "Bahasa Indonesia (Native). Siap untuk kolaborasi profesional.",
    info: "Info: Bahasa Indonesia (Native). Siap untuk kolaborasi profesional."
  },

  jp: {
    welcome: "インターフェースを選択",
    booting: "システム起動中...",
    desc: "システム＆インフラエンジニア",
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

    project_1_title: "Home-Lab (Proxmox VE K3s Cluster)",
    project_1_desc: "Proxmox VE上で構築された高可用性K3sインフラ。GitOps自動化、最適化されたローカルストレージアフィニティ、およびセキュアなトンネル接続を活用。",
    project_1_detail: `1. コンピュート & 仮想化レイヤー\n
    ハイパーバイザ: Proxmox VE (Debianベース)。VMまたはLXCコンテナを介してK3sノードのライフサイクルを管理。\n
    プロビジョニング: Cloud-Initを使用してUbuntu Server VMを自動展開し、一貫したOSベースラインを確保。\n
    リソース割り当て: CPUピン留めとRAMバルーニングを実装し、VictoriaMetricsとGiteaのパフォーマンスを最適化。\n\n
    2. ストレージ & ノードアフィニティ\n
    ハードウェアパススルー: SQLiteの性能向上のため、特定のVMに対してディスクパススルーまたは高速なZFSローカルストレージを使用。\n
    アフィニティマッピング: KubernetesのNode Affinityにより、物理ディスクを持つVM IDにPodを固定し、データの整合性を維持。\n\n
    3. GitOps & 運用ワークフロー\n
    Gitea & FluxCD: 仮想クラスター内に構築。「Infrastructure as Code」(IaC) 環境を実現。\n\n
    4. ネットワーク (ゼロトラスト)\n
    内部ブリッジ: ProxmoxのLinux Bridge (vmbr0) を使用したVM間通信。\n
    接続性: VMレベルでのトンネル接続により、複雑なNAT設定やMetalLBを不要に。\n\n
    5. 保守 & 復旧\n
    バックアップ: Proxmox Backup Server (PBS) によるVMスナップショットと、VictoriaLogsによる監査ログの管理。\n
    高可用性: VMレベルのHAを提供し、ハードウェア故障時に別のホストでノードを自動再起動。`,

    project_2_title: "Home-Lab (Bare Metal K3s Cluster)",
    project_2_desc: "GitOps駆動の軽量なK3sインフラ。VictoriaMetricsによる高性能な監視と、セキュアなトンネル接続によるシームレスなアプリケーション配信を実現。",
    project_2_detail: `1. オーケストレーションと計算\n
    エンジン: K3s over Docker。軽量なディストリビューションにより、リソースをワークロードに最大限割り当て。\n
    ランタイム: 標準化されたDockerランタイムによる一貫したコンテナ管理。\n\n
    2. ストレージとデータの局所性\n
    永続化: Node AffinityとLocal Persistent Volumesを活用し、ネットワーク遅延を排除。\n
    データベース運用: スケーラブルなSQLite管理と、堅牢なファイルベースのバックアップ戦略（S3スナップショット等）。\n\n
    3. 継続的デリバリー (GitOps)\n
    Source of Truth: 内部Giteaインスタンスをマニフェストリポジトリとして運用。\n
    自動化: FluxCDによる宣言型インフラ管理。ゼロタッチ展開を実現し、設定の乖離を防止。\n\n
    4. ネットワークとセキュアアクセス\n
    接続性: Cloudflare/Tailscale等のトンネル接続によるIngress。従来のLBを代替。\n
    セキュリティ: パブリックポートを排除し、攻撃対象領域を最小化。\n\n
    5. 高効率なオブザーバビリティ\n
    テレメトリ: 高性能な VictoriaMetrics と VictoriaLogs の統合。\n
    可視化: Grafanaを統合ダッシュボードとして使用。`,

    project_3_title: "Voltnesia Smart Monitoring",
    project_3_desc: "IoTによる電力コスト監視",
    project_3_detail: "MQTTプロトコルを活用し、電力コストをリアルタイムで監視・記録するIoTベースのモニタリングシステムを構築しました。",

    view_detail: "詳細を見る",
    visit_repo: "リポジトリ",
    jp_status: "管理者は技術力の向上に努めるとともに、現在は外国語も学習しております。翻訳はAIを活用しているため、不自然な表現が含まれる場合がございます。何卒ご理解のほどよろしくお願いいたします。",
    lang_status: "現在、日本語を勉強中です。AI翻訳を利用しているため、表現が不自然な場合があるかもしれませんが、技術と日本語の両面で継続的にスキル向上に努めています。",
    info: "Info: 現在、日本語を勉強中です。\nAI翻訳を利用しているため、表現が不自然な場合があるかもしれませんが、技術と日本語の両面で継続的にスキル向上に努めています。"
  }
};