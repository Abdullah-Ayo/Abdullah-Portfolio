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

![image](Kickstart%201.png) ![image](Kickstart%202.png) ![image](Kickstart%203.png) ![image](kickstart%204.png)


**Hospital Operations Dashboard (Power BI)**

Built an interactive Power BI dashboard for Well-Life Hospital tracking patient admissions from 2021 to 2024, covering diagnosis trends, demographics, and admission volume, with patient-level search functionality.


Key Findings



●	Total patient volume grew significantly over the period: admissions rose from 1,409 in 2021 to 3,266 in 2024, more than doubling over four years, with 2022 to 2023 showing the steadiest growth phase.

●	Admissions peaked around January 2024 before declining slightly through mid-2024, a trend worth flagging to stakeholders since it breaks the otherwise consistent upward trajectory.

●	Diagnosis volume was fairly evenly distributed across the 7 tracked conditions (Typhoid, Asthma, Ulcer, Malaria, Diabetes, Hypertension, Stroke), each falling within a narrow band of roughly 1,390 to 1,487 cases, indicating no single condition dominates the hospital's caseload.

●	The 26-35 age group had the highest admission volume (2,493 patients), with volume dropping sharply after age 55, and minimally represented in the 76-85 range (218 patients), suggesting the hospital serves primarily a working age population.

●	Gender split was 56.81% male (5,681) vs 43.19% female (4,319).

●	Average patient age was 44.0, with a total of 1,451 recorded admission days across the dataset.


Dashboard Features

●	Sidebar navigation for filtering by diagnosis type.

●	Patient registration workflow and patient ID search built into the interface.

●	Year-based filtering (2021-2024) alongside trend, categorical, and demographic breakdowns on a single page.


Skills Demonstrated

Power BI dashboard design for a healthcare/operations use case (KPI cards, time-series trend analysis, categorical and demographic breakdowns), designing for a functional workflow (patient search/registration, not just static reporting), and translating admissions data into an executive-level operational summary.

![image](Hospital%20Dashboard.jpeg)

**Oil & Gas Production Performance Dashboard (Power BI)**

Built an interactive Power BI dashboard for AXZ Oil and Gas Production Company tracking weekly operational KPIs across 4 rig locations (Brass, Ekeremor, Nembe, S.Ijaw), covering production efficiency, cost, safety/issue rates, and workforce metrics.


Key Findings vs. Target


●	Units Produced/Hr hit target almost exactly (11.02 vs. 11 target, +0.19%).

●	Production Cost/Hr came in significantly over target (₦898 vs. ₦750 target, -19.75%), the largest gap on the dashboard and a clear cost-control concern.

●	Units Produced/Issue missed target (232 vs. 250, -7.03%), suggesting output per operational issue/incident is below expectations.

●	Average Training Hours exceeded target (1.11 vs. 1 target, +11.06%), the one KPI outperforming its benchmark.

Rig-Level Performance
●	Brass is the standout performer, leading in units produced per hour (11.2), units produced per issue (314), training hours (1.5), and total units produced (101K), while also carrying the largest workforce (39 employees) and most hours worked (63 avg).

●	Ekeremor is the clear underperformer, with the lowest units/hr (10.8), lowest units per issue (171), lowest training hours (0.8), and the highest cost per unit (₦1,235), a combination worth flagging since it's paying the most per unit while producing the least efficiently.

●	Nembe and S.Ijaw sit in between, with Nembe generally closer to Brass's performance and S.Ijaw closer to Ekeremor's on cost efficiency (₦976/unit) despite reasonable output.


Dashboard Features

●	Week-by-week filtering (Week 1-4) alongside a running week/day selector.

●	Rig-location breakdowns across all four core KPIs plus supporting operational metrics (total units, total cost, hours worked, headcount).

●	Consistent visual language (bar charts for comparison, donut chart for workforce distribution) supporting quick cross-rig comparison.


Skills Demonstrated

Power BI dashboard design for an industrial/operations use case (KPI vs target tracking, multi-location comparison), identifying underperforming units by cross-referencing multiple metrics rather than a single KPI, and translating operational data into a management-level performance summary.

![image](Oil%20Rig%20Dashboard.png)

**Electro Mart Retail Sales Dashboard (Power BI)**


Built an interactive Power BI dashboard for Electro Mart Retail LTD analyzing $63.60M in total revenue across 5 product categories, with breakdowns by shipping method, payment method, customer demographics, order status, and loyalty status.


Key Findings


●	Revenue is heavily concentrated in Standard shipping ($21M), more than any other shipping method and roughly 1.75x the next-highest tier (Expedited/Same Day at $12M each), suggesting most customers aren't paying for faster delivery.

●	Revenue by gender was nearly even (Female $32.19M vs. Male $31.41M), showing no strong gender skew in purchasing.

●	PayPal and Credit Card were the leading payment methods ($19M each), while Cash trailed significantly ($6M), pointing to a strong digital-payment preference among customers.

●	Smartphones led product revenue ($21.52M), roughly 1.5x the next category (Smartwatch, $14.04M), with Headphones contributing the least ($4.04M).

●	The 36-45 age group generated the most revenue ($10.5M), with fairly even spread across the 26-65 range and a sharp drop-off in the 76-85 bracket ($4.9M), the smallest segment.

●	Order cancellation rate is a significant concern: 32.98% of revenue ($20.97M) came from cancelled orders, versus 67.02% completed ($42.63M). Nearly a third of tracked revenue never converted to a completed sale, which is a substantial figure worth investigating (product issues, fulfillment delays, payment failures, etc.) rather than treating as background noise.

●	Loyalty members drove the large majority of revenue (78.58%, $49.98M) versus non-members (21.42%, $13.63M), suggesting the loyalty program is a strong revenue driver worth protecting and expanding.

●	Average product rating sits at 3.1, with "Average" rated reviews contributing the most revenue ($24.23M), while "Poor" ratings still account for a notable $16.17M, indicating room for product/service quality improvement.


Dashboard Features

●	Filters for payment method, shipping type, and product type.

●	Consistent revenue-based framing across every visual (all breakdowns measured by revenue rather than order count), keeping the story financially anchored.

●	Demographic, behavioral, and satisfaction metrics combined on a single page for a full customer view.


Skills Demonstrated

Power BI dashboard design for a retail/e-commerce use case (multi-dimensional revenue segmentation), surfacing a material business risk (high cancellation rate) rather than only reporting positive metrics, and translating transactional data into a business-level performance summary.

![image](ElectroMart%20Dashboard.png)

**HR Attrition Dashboard (Excel)**


Built an interactive Excel dashboard analyzing employee attrition across a workforce of 780 total staff, covering demographics, performance ratings, satisfaction, salary, and job-role breakdowns, with filtering by gender and job role.


Key Findings

●	Attrition rate stands at 30% (234 of 780 total staff), with 546 staff currently active, a high rate worth flagging as a core business concern rather than a routine metric.

●	Attrition is concentrated in early-to-mid career staff: the 31-35 age range accounts for the highest attrition (91 employees), nearly double the 41-45 range (20), with the 46-50 range barely represented (1), suggesting retention issues are heaviest among younger and mid-career employees rather than those nearing typical retirement age.

●	Gender split in attrition was fairly close but skewed toward male staff (Male 123 vs. Female 111).

●	Performance ratings among attrited staff skewed negative: "Poor" (76) and "Average" (70) ratings were the most common, together far outweighing "Above Average" (20) and "Good" (11), indicating attrition is disproportionately concentrated among lower-performing or so-labeled staff, though this pattern deserves a closer look at whether rating and attrition are cause, effect, or both.

●	Satisfaction ratings tell a similar story: "Average" (116) and "Unsatisfied" (68) dominate, while "Highly Satisfied" (4) and "Highly Unsatisfied" (3) are rare, with an average satisfaction rating of only 3.8.

●	Salary appears to be a factor: only 24 attrited employees were in the "Very Low" salary bracket, while 87 were "Low" and 86 were "High", suggesting attrition isn't purely a low-pay problem, and other factors (role, performance, tenure) likely play a larger role than compensation alone.

●	HR (49) and Finance (46) departments had the highest attrition counts, with IT (36) and Engineering (18, per job role) trailing. By job role, Specialist (56) and Engineer (51) roles saw the most attrition.

●	Average tenure (years of service) for attrited staff is 6.2 years, with a cyclical pattern in the attrition-by-tenure trend line rather than a simple early-exit or late-exit skew.


Dashboard Features

●	Filters for gender and job role (multi-select button filter).

●	KPI cards for total staff, total attrition, active staff, and attrition rate.

●	Radial/gauge visuals for salary-based attrition segmentation (Low, High, Very High, Very Low), alongside bar and donut charts for categorical breakdowns.


Skills Demonstrated

Excel dashboard design for an HR/people-analytics use case (attrition segmentation across multiple dimensions), interpreting workforce data cautiously (noting correlation vs. causation questions around performance and attrition rather than overstating the finding), and translating HR metrics into a leadership-ready summary.


![image](Screenshot%202025-10-07%2023341.png)

**Bank Churn Analysis Dashboard (Excel)**


Built an interactive Excel dashboard for XYZ Bank analyzing customer churn across 10,000 customers, with breakdowns by geography, age, gender, tenure, account balance, and credit score, filterable by geography and credit score range.


Key Findings

●	Overall churn rate is 20.37% (2,037 of 10,000 customers), roughly 1 in 5 customers churning.

●	Churn is heavily age-concentrated: the 46-55 age range has the highest churn rate (50.57%), closely followed by 56-65 (48.32%), while younger customers (16-25, 26-35) churn far less (7.53% and 8.50%). This is a sharp pattern, older-middle-age customers are more than 6x as likely to churn as customers under 35.

●	Geographically, Ebonyi has by far the highest churn rate (32.44%), roughly double Enugu (16.67%) and Anambra (16.15%), making it the clear geographic outlier worth investigating.

●	Gender split in churn was fairly close but skewed toward one group (25.07% vs. an implied ~16.46% for the other, based on the donut chart), though the exact labels weren't fully legible in the source image, worth double-checking against the source file before publishing.

●	Tenure showed relatively little variation in churn rate (between 18.87% and 21.30% across all tenure bands), suggesting how long a customer has been with the bank isn't a strong standalone churn driver.

●	Account balance shows a clear signal: customers with balances in the ₦200k-₦249k range have a churn rate of 55.56%, far higher than any other balance band (next highest is ₦100k-₦149k at 25.85%), a striking pattern that likely deserves more investigation, since a churn rate this much higher than every neighboring band could reflect a genuine risk segment or a smaller sample size skewing the percentage.

●	Credit score range showed minimal variation in churn rate (19.54% to 21.37% across all bands), indicating credit score alone isn't a strong churn predictor here.


Dashboard Features

●	Filters for geography and credit score range.

●	Geographic map visual (Nigeria states) showing churn rate by region.

●	Combination of trend line, bar, donut, and horizontal bar charts across a single-page layout.


Skills Demonstrated

Excel dashboard design for a banking/customer-retention use case (churn segmentation across demographic, geographic, and financial dimensions), identifying a high-impact outlier segment (the ₦200k-₦249k balance band) rather than only reporting averages, and translating churn data into a business-level risk summary.

![image](Churn%20Dashboard.png)

**Delmart Retail Ltd Sales Dashboard (Power BI)**

Built a multi-page Power BI dashboard for Delmart Retail Ltd (a bike/cycling retailer) analyzing 113,223 sales and ₦95,223,593 in total revenue across 17 products in 3 categories, with filters by product category, product, and year.


Key Findings

●	Revenue is heavily skewed toward customers aged 26-35 (₦35.09M), followed by 36-45 (₦27.84M), together accounting for roughly two-thirds of total revenue, while customers over 65 contribute a negligible share (under ₦250K combined for the 66-95 age range).

●	Bikes drive revenue disproportionately to sales volume: Bikes account for only 14.9% of unit sales (16,924) but 72.69% of revenue (₦69.22M), while Clothing accounts for the majority of unit sales (62.1%, 70,317) but a much smaller share of revenue, a classic high-volume/low-margin vs. low-volume/high-margin split.

●	At the sub-category level, this pattern repeats: Road Bikes generate the most revenue (₦37.42M) despite modest unit sales (13,406), while Tires and Tubes sell the most units by far (33,866) but generate comparatively little revenue (₦5.17M), confirming bikes as the margin driver and consumables as the volume driver.

●	Rivers state leads in both sales volume (39,303) and revenue (₦31M), but Delta stands out on efficiency, generating ₦25M in revenue from fewer sales than Rivers, suggesting a higher average order value in that state worth investigating further.

●	Revenue split by gender was close to even (Female 50.78% vs. Male 49.22%).


Two Things Worth Flagging in the Dashboard

1. One "Total Sales by Customer_Gender" visual shows values (701,285 and 647,068) that sum to 1,348,353, matching Total Order Quantity rather than Total Sales (113,223). This looks like a mislabeled measure (order quantity plotted under a "Total Sales" title) rather than an actual sales-by-gender breakdown, worth correcting before sharing externally.
2. The Year slicer only offers 2011, 2012, and 2013 as selectable options, but the "Total Sales by Year, Quarter and Month" trend line extends through 2016 with a sharp sawtooth pattern (a steep rise, a sudden drop to near-zero in 2015, then another rise). This mismatch between the filter's stated range and the chart's actual range, combined with the unusual cyclical shape, suggests either a data scope issue or an anomaly worth investigating before treating the trend as a genuine seasonal pattern.


Skills Demonstrated

Power BI dashboard design for a retail use case (multi-dimensional revenue and volume segmentation), distinguishing volume drivers from margin drivers rather than treating all products equally, and catching dashboard-level labeling and scope inconsistencies through careful cross-checking of visuals against their underlying totals.

![image](deltamart%20dashboard%201.png)
![image](deltamart%20dashboard%202.png)
![image](deltamart%20dashboard%203.png)
![image](Dashboard%204.png)

**Parameter Slicer Dashboard (Power BI)**


Built a Power BI dashboard demonstrating parameter-driven visual design, comparing a traditional multi-chart layout against a dynamic, parameter-controlled layout using the same underlying product and location data (Revenue, Rating, Average Age, and Units Sold across brands like Apple, Samsung, Xiaomi, Tecno, and others).


Design Approach

●	Left panel: a traditional static layout with four separate bar charts (Revenue, Avg Age, Rating, Units Sold by Product), each competing for space and attention.

●	Right panel: a parameter-driven layout where a single toggle group (Revenue / Rating / Avg Age / Units Sold) dynamically swaps what one bar chart and one set of KPI circles display, and a second toggle group (Location / Products / Rep) switches the dimension being analyzed.

●	Used a single 'what-if' parameter to drive both the KPI cards and the bar chart, rather than duplicating visuals for every metric combination.


Why This Matters

●	One visual, many stories: the same chart space answers multiple business questions depending on what the user selects, rather than requiring four charts stacked on a page.

●	Lower cognitive load: a parameter slicer does the filtering for the viewer, so they aren't forced to mentally scan multiple competing charts to find the one relevant to their question.

●	Better scalability: adding a new metric means adding one parameter option and one measure, not redesigning the whole layout.

●	More honest comparison: because every metric renders through the same visual template (same chart shape, same KPI style), the eye doesn't have to re-orient to a new chart type each time, making values easier to compare across categories.


Design Principle Demonstrated

A dashboard's job isn't to show everything the analyst found, it's to answer the two or three questions the viewer actually has. Every additional chart competes for limited attention, adds another axis and legend to parse, and increases the risk the viewer misses the number that matters most. This project shows how a parameter slicer resolves the tension between having multiple metrics to show and wanting a focused, minimal-visual layout, by making the chart itself the variable rather than making the page longer.


Skills Demonstrated

Power BI parameter and what-if analysis design, dynamic measure switching, dashboard information-architecture (comparing static vs. dynamic layouts side by side), and applying minimal-visual design principles to reduce cognitive load for end users.
![image](Parameter%20slicer.png)









