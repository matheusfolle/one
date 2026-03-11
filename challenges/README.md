Telecom X — Previsão de Churn
Descrição

Projeto de Machine Learning para prever quais clientes da Telecom X têm maior probabilidade de cancelar seus serviços. O objetivo é apoiar decisões estratégicas de retenção e otimizar o lifetime value.

Conteúdo

dados_tratados.csv — dataset limpo e padronizado (Parte 1: ETL e análise exploratória).

Scripts de pré-processamento, treinamento e avaliação de modelos: Regressão Logística e Random Forest.

Visualizações de churn, correlação e importância das variáveis.

Metodologia

Pré-processamento: tratamento de valores ausentes, codificação one-hot, normalização (para modelos lineares).

Divisão treino/teste: 80% treino / 20% teste, mantendo proporção de churn.

Modelos:

Regressão Logística (linear, interpretável, normalizada)

Random Forest (não linear, captura interações complexas, sem normalização)

Avaliação: acurácia, precisão, recall, f1-score, matriz de confusão.

Análise de variáveis: coeficientes (logística) e importância (Random Forest).

Principais Insights

Churn mais frequente entre clientes novos, contratos mensais e mensalidade alta.

Tenure baixo e total pago baixo aumentam risco de evasão.

Estratégias recomendadas: incentivar contratos anuais, programas de retenção nos primeiros meses e benefícios para clientes de alta mensalidade.

Como Executar

Carregar dados_tratados.csv.

Executar script de pré-processamento e encoding.

Treinar modelos e gerar métricas e visualizações.

Interpretar resultados e priorizar ações estratégicas com base nas variáveis mais importantes.