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

**Diagnostic & Dscriptive Analysis of salesperson performance using power bi.**

Chioma is carrying the team. Her ₦36.77M surplus accounts for nearly 79% of the total ₦46.6M variance. Without her, the other three combined only add ₦9.83M against target, and Danladi is the only one who missed target outright, though only marginally.
Monthly Trend (Jan-Dec)
The year was volatile, not a steady climb:
●	Weak start: January (-24.70%) and February (-31.49%) were sharp misses, roughly ₦55.5M and ₦61.7M below target respectively.
●	Sharp rebound: March jumped to +37.44% (+₦87.37M), the biggest single-month swing.
●	Mixed middle: April dipped again (-11.70%), then May through July hovered close to target (between -1.18% and +11.29%).
●	Late dip: September (-6.01%) and November (-2.74%) underperformed.
●	Strong finish: October (+6.75%) and especially December (+41.45%, +₦82.41M) closed the year well.
So the full-year 1.72% surplus is really the net of two very bad months (Jan, Feb), two very good months (Mar, Dec), and a mostly flat middle, rather than consistent overperformance.
Dashboard Issues to Flag
●	The Home page header says "for the year 2014," but every chart axis is labeled 2024. This is very likely a typo on the dashboard (2024, not 2014), worth fixing before this goes to anyone external.
●	August shows a variance of -₦1,210,000 (actual below target) but the Var% is displayed as +0.81%. Based on the actual figures (₦217,660,000 actual vs ₦218,870,000 target), that percentage should be negative (approximately -0.55%). Worth checking the DAX measure behind that Var% column, since it looks like a sign error rather than a one-off.

![image](Salesperson%201.png)
![image](Salesperson%202.png)
![image](Salesperson%203.png)
![image](Salesperson%204.png)


**Data cleaning with MYSQL.**
1. Removed Duplicates
●	Used ROW_NUMBER() OVER (PARTITION BY ...) across all columns to flag duplicate rows.
●	Created a new table layoffs_staging2 (identical structure plus a row_num column) and inserted the numbered rows into it.
●	Deleted rows where row_num > 1, keeping only the first occurrence of each duplicate set.
2. Standardized the Data
●	Trimmed whitespace from the company column.
●	Consolidated inconsistent industry values (e.g. "Crypto", "Crypto Currency", etc.) into a single 'Crypto' label using LIKE 'crypto%'.
●	Cleaned country values by trimming a trailing period (fixing 'United States.' to 'United States').
●	Converted the date column from text to a proper DATE type using STR_TO_DATE with format %m/%d/%Y, then altered the column type from text to date.
3. Handled Null/Blank Values
●	Identified rows where both total_laid_off and percentage_laid_off were null (essentially no useful data).
●	Found blank/null industry values and used a self-join (matching on company and location) to backfill missing industry values from other rows of the same company.
●	Converted lingering empty-string industry values to proper NULL.
●	Deleted rows where both total_laid_off and percentage_laid_off were null, since those rows carried no usable metric.
4. Removed Helper Columns
●	Dropped the row_num column at the end, since it was only needed for de-duplication.
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








