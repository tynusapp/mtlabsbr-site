# Site institucional MT Labs

Site estático preparado para GitHub Pages no domínio `mtlabs.tech`.

## Publicação

1. Crie o repositório GitHub para o site e envie o conteúdo desta pasta para a branch principal.
2. Em **Settings → Pages**, selecione **Deploy from a branch**, branch principal e pasta `/ (root)`.
3. O arquivo `CNAME` já aponta para `mtlabs.tech`.
4. Configure no provedor DNS os registros indicados pelo GitHub Pages e habilite **Enforce HTTPS** quando ficar disponível.

## Analytics

Insira o Measurement ID do Google Analytics em `analytics-config.js`. O script só é carregado após consentimento. Os eventos estão documentados em `ANALYTICS.md`.

## Desenvolvimento local

Não há build ou dependências. Sirva esta pasta com um servidor HTTP estático, por exemplo:

```bash
python3 -m http.server 8080
```
