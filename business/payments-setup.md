# Setting Up Online Payments

The website's **Book & Pay** page (`pay.html`) has four buttons that need real payment links:

| Placeholder in `pay.html` | What it should charge |
|---|---|
| `#PAYMENT_LINK_BASIC_DEPOSIT` | $100 deposit: Business/Product |
| `#PAYMENT_LINK_AERIAL_DEPOSIT` | $150 deposit: FPV Aerials |
| `#PAYMENT_LINK_FULL_DEPOSIT` | $500 deposit: Full Package |
| `#PAYMENT_LINK_CUSTOM_AMOUNT` | Customer enters any amount (invoices/balances) |

The site is a static website, so it never touches card numbers. Each button simply sends the customer to a secure checkout page hosted by the payment company.

## Option A: Stripe Payment Links (recommended)
1. Create an account at https://stripe.com and finish business verification (needs bank account and EIN or SSN).
2. Go to **Payment Links → New**.
3. For each deposit, create a product (for example "FPV Aerials – Deposit", $150) and create the link.
4. For the invoice button, create a product and choose **"Let customers choose what to pay."**
5. Under **After payment**, set a confirmation message or redirect to `.../contact.html`.
6. Copy each link (it looks like `https://buy.stripe.com/...`) into `pay.html` in place of the matching placeholder.

Fees are roughly 2.9% + 30¢ per card payment. Stripe also handles Apple Pay and Google Pay.

## Option B: Square
Use **Square Online Checkout → Payment links**. The process is similar to Stripe, and it's a good fit if you also want a card reader for in-person payments.

## Option C: PayPal / Venmo Business
Create **PayPal Payment Links** at paypal.com/business. Customers can pay with PayPal, Venmo or card.

## Sending custom invoices
For full-package jobs and anything quoted custom, send a proper invoice from Stripe Invoicing, Square Invoices or PayPal Invoicing instead of using the generic button.

## Contact form
The contact form works right away by opening the visitor's email app. To get submissions delivered straight to your inbox:
1. Sign up free at https://formspree.io and create a form.
2. Copy the form ID (the part after `/f/` in the URL).
3. Paste it into `assets/js/main.js` → `formspreeId`.
