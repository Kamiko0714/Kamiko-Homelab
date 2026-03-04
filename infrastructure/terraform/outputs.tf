output "mikrotik_tunnel_token" {
  value     = cloudflare_zero_trust_tunnel_cloudflared.mikrotik_tunnel.tunnel_token
  sensitive = true
}

output "node1_tunnel_token" {
  value     = cloudflare_zero_trust_tunnel_cloudflared.node1_tunnel.tunnel_token
  sensitive = true
}

output "node2_tunnel_token" {
  value     = cloudflare_zero_trust_tunnel_cloudflared.node2_tunnel.tunnel_token
  sensitive = true
}