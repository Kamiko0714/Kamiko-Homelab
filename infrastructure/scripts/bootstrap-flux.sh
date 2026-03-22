#!/bin/bash

#Variable di sesuaikan dengan ip dan domain
GITEA_URL="https://git.kamiko.dev/"
GITEA_USERNAME="kamiko"
REPO_NAME="Kamiko-Homelab"

echo "Checking if Flux is already installed..."
if ! command -v flux &> /dev/null
then
    echo "Flux not found, installing..."
    curl -s https://fluxcd.io/install.sh | sudo bash
else
    echo "Flux is already installed."
fi

echo "Bootstrapping Flux with Gitea repository..."
flux bootstrap gitea \
    --url=${GITEA_URL}/${GITEA_USERNAME}/${REPO_NAME}.git \
    --branch=main \
    --path=gitops/clusters/flux-system \
    --password={gitea_token} \
    --user={GITEA_USERNAME} \
    --token-auth