## add repo sealed-secrets
    
    helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets

## install sealed-secrets on namespace kube-system
    
    helm install my-release sealed-secrets/sealed-secrets -n kube-system
    
## install kubeseal    
    
    KUBESEAL_VERSION='0.23.0' # Set this to, for example, KUBESEAL_VERSION='0.23.0'
    wget "https://github.com/bitnami-labs/sealed-secrets/releases/download/v${KUBESEAL_VERSION:?}/kubeseal-${KUBESEAL_VERSION:?}-linux-amd64.tar.gz"
    tar -xvzf kubeseal-${KUBESEAL_VERSION:?}-linux-amd64.tar.gz kubeseal
    sudo install -m 755 kubeseal /usr/local/bin/kubeseal
    
## see certificate

    kubeseal --fetch-cert --controller-name my-release-sealed-secrets --controller-namespace kube-system

## create sealed-secret.yml

    kubeseal --controller-name my-release-sealed-secrets --controller-namespace kube-system --format yaml < secrets.yml > sealed-secret.yml

## now you can delete common secrets.yml and add sealed-secret.yml in your repository without problem!