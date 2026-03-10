terraform {
  backend "remote" {
    organization = "kamiko"

    workspaces {
      name = "kamiko-devops-lab"
    }
  }
}