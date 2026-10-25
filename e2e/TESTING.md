# 🧪 SmileIndia Dental Clinic - Playwright Testing

## Test Automation

This project uses Playwright for automated End-to-End (E2E) testing of the SmileIndia Dental Clinic website.

**Live Website:**  
https://smile-clinic-website-html-css-js.vercel.app/

---

## 📊 Test Execution Summary

| Test Tool | Browser | Test Cases | Passed | Failed |
|---|---|---:|---:|---:|
| Playwright | Chromium | 9 | ✅ 9 | ❌ 0 |

### Overall Status

> ✅ **ALL EXECUTED TEST CASES PASSED**

---

# 📋 Test Cases

| ID | Test Case | Expected Result | Status |
|---|---|---|---|
| TC-01 | Website loads successfully | Website loads and main heading is visible | ✅ PASS |
| TC-04 | Valid hero booking | Booking success message is displayed | ✅ PASS |
| TC-08 | Before/After slider | Slider responds correctly | ✅ PASS |
| TC-09 | FAQ accordion | FAQ interaction works correctly | ✅ PASS |
| TC-10 | Reviews section | Reviews section is available | ✅ PASS |
| TC-11 | Mobile menu | Mobile menu opens and closes | ✅ PASS |
| TC-12 | WhatsApp button | WhatsApp CTA is visible | ✅ PASS |
| TC-13 | Website accessibility | Live website is accessible | ✅ PASS |
| TC-14 | Treatments section | Treatments section is visible | ✅ PASS |

---

# 🔍 Detailed Test Coverage

## TC-01 — Website Loading

**Objective:** Verify that the website loads correctly.

**Validation:**
- Website URL is accessible
- Page title is correct
- Main heading is visible

**Result:** ✅ PASS

---

## TC-04 — Appointment Booking

**Objective:** Verify that a user can submit valid appointment information.

**Test Data:**

```text
Name: Test Patient
Phone: 9876543210
City: Delhi / NCR