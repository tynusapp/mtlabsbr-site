# Analytics do site MT Labs

O carregamento de métricas é opcional e só acontece após consentimento. Configure o Measurement ID em `analytics-config.js`. Nenhum evento inclui texto livre ou dados pessoais.

| Evento | Quando | Parâmetros permitidos |
| --- | --- | --- |
| `site_viewed` | Analytics é iniciado após consentimento | — |
| `hero_cta_clicked` | CTA principal é acionado | — |
| `navigation_clicked` | Link do cabeçalho é acionado | `destination` |
| `product_opened` | Site de um produto é aberto | `product` |
| `support_clicked` | E-mail de suporte é acionado | `product` |
| `legal_opened` | Página legal é aberta pelo rodapé | `document` |

Valores aceitos não contêm identificadores de usuário. Falhas no Analytics não bloqueiam links ou navegação.
