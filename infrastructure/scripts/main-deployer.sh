#!/bin/bash
set -e

# Warna untuk output
GREEN='\033[0-32m'
NC='\033[0m'

echo -e "${GREEN}Starting main deployer script...${NC}"
echo -e "${GREEN}>>> 1. Validate Environment...${NC}"
if [ -z "$GITEA_TOKEN" ]; then
    echo "Error: GITEA_TOKEN environment variable is not set."
    exit 1
fi

echo -e "${GREEN}>>> 2. Terraform: Provisioning Cloud Resources...${NC}"
cd ../terraform
terraform init
terraform apply -auto-approve

echo -e "${GREEN}>>> 3. Ansible: Configuring Servers...${NC}"
cd ../ansible
ansible-playbook -i inventory.ini setup-nodes.yaml

echo -e "${GREEN}>>> 4. Bootstrap FluxCD...${NC}"
flux bootstrap git \
    --url=https://git.kamiko.dev/kamiko/Kamiko-Homelab.git \
    --branch=main \
    --path=gitops/clusters/flux-system \
    --password=${GITEA_TOKEN} \
    --user=kamiko \
    --token-auth

echo -e "${GREEN}>>> 5. Finalizing: Injecting Age Key for SOPS${NC}"
if [ -f ~/.age/identity.txt ]; then
    kubectl create secret generic sops-age \
      --namespace=flux-system \
      --from-file=age.agekey=$HOME/.age/identity.txt || echo "Secret sops-age already exists, skipping..."
fi

echo -e "${GREEN}Main deployer script completed successfully!${NC}"