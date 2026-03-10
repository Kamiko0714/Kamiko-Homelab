# 1. Tunnel untuk Node 1 (Frontend Dev)
resource "cloudflare_zero_trust_tunnel_cloudflared" "node1_tunnel" {
  account_id = var.cloudflare_account_id
  name       = "node-1-frontend"
  secret     = var.tunnel_secret
}

# 2. Tunnel untuk Node 2 (Backend & QA)
resource "cloudflare_zero_trust_tunnel_cloudflared" "node2_tunnel" {
  account_id = var.cloudflare_account_id
  name       = "node-2-backend"
  secret     = var.tunnel_secret
}

# 3. DNS untuk Frontend
resource "cloudflare_record" "frontend_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "app"
  content = "${cloudflare_zero_trust_tunnel_cloudflared.node1_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}

# 4. DNS untuk Backend
resource "cloudflare_record" "backend_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "api" # api.kamiko.dev
  content = "${cloudflare_zero_trust_tunnel_cloudflared.node2_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}

# 6. Buat Tunnel untuk Azure
resource "cloudflare_zero_trust_tunnel_cloudflared" "azure_tunnel" {
  account_id = "ae1df14fae7a0766c51e7735135903ef"
  name       = "azure-witness-server"
  secret     = base64encode(random_password.azure_tunnel_secret.result)
}

resource "random_password" "azure_tunnel_secret" {
  length = 32
}

# 6. Buat DNS Record untuk Azure
resource "cloudflare_record" "azure_dns" {
  zone_id = "d27446f8d7db2ec927e3acb2849e09cb"
  name    = "witness"
  value   = "${cloudflare_zero_trust_tunnel_cloudflared.azure_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}

# 7. Definisi Tunnel Azure
resource "cloudflare_record" "status_page" {
  zone_id = "d27446f8d7db2ec927e3acb2849e09cb"
  name    = "status" # status.kamiko.dev
  value   = "${cloudflare_zero_trust_tunnel_cloudflared.azure_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}