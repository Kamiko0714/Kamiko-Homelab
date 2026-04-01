# --- 1. NODE RUMAH (Node 1 & Node 2) ---

resource "cloudflare_zero_trust_tunnel_cloudflared" "node1_tunnel" {
  account_id = var.cloudflare_account_id
  name       = "kamiko-node-1" # Samakan dengan nama di dashboard
  secret     = var.tunnel_secret
}

resource "cloudflare_zero_trust_tunnel_cloudflared" "node2_tunnel" {
  account_id = var.cloudflare_account_id
  name       = "kamiko-node-2" # Samakan dengan nama di dashboard
  secret     = var.tunnel_secret
}

# DNS Records
resource "cloudflare_record" "gitea_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "git"
  content = "${cloudflare_zero_trust_tunnel_cloudflared.node1_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}

resource "cloudflare_record" "app_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "app"
  content = "${cloudflare_zero_trust_tunnel_cloudflared.node1_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}

# --- 2. AZURE WITNESS ---

resource "random_password" "azure_tunnel_secret" {
  length  = 32
  special = false
}

resource "cloudflare_zero_trust_tunnel_cloudflared" "azure_tunnel" {
  account_id = var.cloudflare_account_id
  name       = "azure-witness-server"
  secret     = base64encode(random_password.azure_tunnel_secret.result)
}

resource "cloudflare_record" "witness_dns" {
  zone_id = var.cloudflare_zone_id
  name    = "witness"
  content = "${cloudflare_zero_trust_tunnel_cloudflared.azure_tunnel.id}.cfargotunnel.com"
  type    = "CNAME"
  proxied = true
}