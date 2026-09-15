## ABOUT ME

Hello, I'm Lukman Abdullah, an economics graduate with hands-on experience in data analysis, business analysis and data visualisation, building Power BI and Tableau dashboards, writing SQL queries and using Excel to clean, model and interpret data for business decision-making. Skilled at identifying patterns in datasets, translating findings into clear insights, and supporting process and market research analysis.

## WHAT I DO

**📊 Data Analysis**
I clean, model, and interpret data using Excel and SQL to uncover patterns and turn raw numbers into insights that support decision-making.

**📈 Data Visualization**
I build interactive dashboards in Power BI and Tableau that turn complex datasets into clear, easy-to-read stories for business stakeholders.

**📉 Forecasting & Econometrics**
I apply statistical and econometric methods to analyze trends and support forecasting for business planning and decision-making.

**🔍 Business & Market Analysis**
I analyze business processes, conduct market research, and investigate process deviations to identify opportunities for organizational improvement.

**🧹 Data Cleaning & Reporting**
I prepare and structure raw datasets for analysis, ensuring accuracy and consistency before building reports and dashboards.


## MY PORTFOLIO

*A glimpse of projects I've been working on*

**Sales Variance Analysis Dashboard (Power BI)**

Built a multi-page Power BI dashboard tracking sales performance against targets for a 4-person sales team across the 2024 fiscal year, with drill-downs by salesperson and by month.
Key Findings
●	The team exceeded its overall annual target by 1.72% (₦2.619B actual vs ₦2.573B target).
●	Performance was heavily concentrated: one salesperson (Chioma) generated 79% of the total surplus, while the other three combined only marginally covered the gap, and one rep missed target outright (-0.37%).
●	Monthly performance was volatile rather than steady: two very weak months (Jan -24.7%, Feb -31.5%) were offset almost entirely by two very strong months (Mar +37.4%, Dec +41.5%), with a mostly flat middle.
Data Quality Review
●	Identified and flagged an inconsistency in the dashboard's own Var% calculation for August, where the displayed percentage (+0.81%) didn't match the sign of the underlying variance (a shortfall), pointing to a likely DAX measure error.
●	Caught a labeling error on the dashboard header ("year 2014" vs. chart axes showing 2024).
Skills Demonstrated
Power BI report design (KPI cards, drill-through pages, variance visuals), reading and validating DAX-driven metrics, identifying data/calculation errors before reporting to stakeholders, and translating dashboard output into a written executive summary.


![image](Salesperson%201.png)
![image](Salesperson%202.png)
![image](Salesperson%203.png)
![image](Salesperson%204.png)


**SQL Data Cleaning — Layoffs Dataset**

Cleaned and standardized a raw layoffs dataset in MySQL, preparing it for downstream analysis by removing duplicates, standardizing inconsistent values, handling missing data, and dropping helper columns.
Process
●	Used ROW_NUMBER() OVER (PARTITION BY...) to detect and remove exact duplicate records, staging the deduplicated data into a clean working table.
●	Standardized inconsistent text values: trimmed whitespace from company names, consolidated variant industry labels (e.g., multiple "Crypto" variants) into one category, and cleaned trailing punctuation from country names.
●	Converted a text-based date column into a proper DATE type using STR_TO_DATE.
●	Backfilled missing industry values using a self-join on company and location, then converted remaining blanks to proper NULL.
●	Removed rows with no usable metrics (both layoff count and percentage null) and dropped the temporary row-numbering column once cleaning was complete.
Skills Demonstrated
SQL data cleaning (CTEs, window functions, self-joins, type conversion), practical data quality judgment (deciding what counts as a true duplicate vs. missing data), and writing maintainable, reviewable SQL.
Code Review Note
Two minor logic issues were caught while reviewing the original script: a PARTITION BY clause referencing a string literal instead of the actual date column, and a redundant condition in a later UPDATE statement. Worth mentioning in an interview, as it demonstrates a habit of double-checking queries for correctness.

![image](datasql%201.png)

**Kickstarter Campaign Success Analysis (Power BI)**

Built an interactive Power BI dashboard analyzing 331K completed Kickstarter campaigns to identify what drives project success and failure, combining descriptive analytics with two predictive regression models.
Key Findings
●	Overall success rate across the dataset was 40.38% (134K successful vs. 198K failed projects).
●	Dance had the highest success rate among categories (65.44%), followed by Theater (63.8%), despite neither being high-volume categories, indicating a quality-over-quantity pattern.
●	Among projects with funding goals above $1,000, the success rate dropped to 37.69%, below the overall average, suggesting more ambitious funding targets are harder to hit.
●	Country-level analysis found only one year (2011) where successful projects outnumbered failed ones globally, and identified Japan as the only country where pledged amounts to failed projects exceeded pledges to successful ones ($47,705 vs $37,106), a signal of low investor engagement rather than a large gap.
Predictive Modeling
●	Built two regression models (a "success likelihood" model and a "failure likelihood" model) using funding goal, pledge amount, and backer count as predictors.
●	Both models showed consistent directional relationships: higher goals increased failure risk, while higher pledge totals and backer counts increased success likelihood.
Important limitation: both models had very low explanatory power (R² of 0.017 and 0.0115 respectively), meaning goal, pledge, and backer count together explain less than 2% of what determines success or failure. The directional relationships are real, but success is driven mostly by factors outside this dataset (category, marketing, timing, etc.). This limitation is stated explicitly rather than glossed over, since a reviewer with a statistics background would check for it.
Recommendations Delivered
●	Ensure funding goals are realistic and achievable before launch.
●	Target growth campaigns in low-engagement regions like Japan.
●	Prioritize partnerships in high-pledge countries (US, UK).
●	Expand the underlying dataset to capture more explanatory variables, since the current model's low R² points to missing predictors.
Skills Demonstrated
Power BI dashboard design (multi-page report with dynamic KPIs), DAX-based aggregation, regression modeling and interpretation, statistical literacy (correctly reporting and contextualizing a low R² rather than overstating model performance), and translating analysis into stakeholder-facing recommendations.

![image](Kickstart%201.png)
![image](Kickstart%202.png)
![image](Kickstart%203.png)
![image](kickstart%204.png)


**Diagnostic & Dscriptive Analysis of patients using an Hospital Dataset.**
![image](Hospital%20Dashboard.jpeg)

**Diagnostic & Dscriptive Analysis of employee using an oil Rig Dataset.**
![image](Oil%20Rig%20Dashboard.png)

**Diagnostic & Dscriptive Sales Analysis using an Electronics Store Dataset.**
![image](ElectroMart%20Dashboard.png)

**Diagnostic & Dscriptive HR Analysis using a business HR Dataset.**
![image](Screenshot%202025-10-07%2023341.png)

**Diagnostic & Dscriptive Churn Analysis using a bank Dataset.**
![image](Churn%20Dashboard.png)

**Diagnostic &Descriptive Sales analysis for a sport hardware store.**
![image](deltamart%20dashboard%201.png)
![image](deltamart%20dashboard%202.png)
![image](deltamart%20dashboard%203.png)
![image](Dashboard%204.png)








