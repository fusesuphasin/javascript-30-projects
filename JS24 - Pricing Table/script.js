// Constrcutor Object 
function Plan(name, priceMonthly, space, transferSpeed, maxDomains, discountAnnual) {
    this.name = name;
    this.priceMonthly = priceMonthly;
    this.space = space;
    this.transferSpeed = transferSpeed;
    this.maxDomains = maxDomains;
    this.discountAnnual = discountAnnual;
}

// Prototype property
// Calculate Annual Price
Plan.prototype.priceAnnual = function() {
    return Math.round((this.priceMonthly * 12) - (this.priceMonthly * this.discountAnnual));
};

// Create Object Instances
let planBasic = new Plan('Basic', 10, '100GB', '1000GB', 10, 0.10);
let planPro = new Plan('Pro', 30, '500GB', '5000GB', 50, 0.15);
let planUnlimited = new Plan('Unlimited', 100, 'Unlimited', '20000GB', 'Unlimited', 0.20);

let plansArray = [];
plansArray.push(planBasic, planPro, planUnlimited);

let plansHTML = document.getElementById('plans');

for (let i = 0; i < plansArray.length; i++) {
    let plan = plansArray[i];

    // Create html for plan objects
    let planHTML = document.createElement('div');
    planHTML.id = 'plan-' + i;
    planHTML.className = 'plan';
    planHTML.innerHTML = `
        <h2 class="plan-heading">${plan.name}</h2>
        <div class="plan-subheading">$${plan.priceMonthly}/mo</div>
        <div class="plan-divider">or</div>
        <div class="plan-highlight">$${plan.priceAnnual()}/year <small>(save ${(plan.discountAnnual * 100)}%)</small></div>
        <ul class="plan-features">
            <li>${plan.space} Disk Space</li>
            <li>${plan.transferSpeed} Data Transfer/month</li>
            <li>${plan.maxDomains} Domains</li>
        </ul>
        <a href="#" class="plan-cta">Select Plan</a>
    `;
    plansHTML.appendChild(planHTML);
}
