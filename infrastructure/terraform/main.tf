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
  name    = "app" # app.kamiko.dev
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