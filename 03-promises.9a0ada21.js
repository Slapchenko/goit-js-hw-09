!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),u={form:document.querySelector(".form"),delayField:document.querySelector('input[name="delay"]'),stepField:document.querySelector('input[name="step"]'),amountField:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')};function i(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}u.form.addEventListener("submit",(function(e){event.preventDefault();for(var t={delay:Number(u.delayField.value),step:Number(u.stepField.value),amount:Number(u.amountField.value)},n=t.delay,o=t.step,l=t.amount,a=1;a<=l;a+=1)i(a,n).then((function(e){return r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)})),n+=o}))}();
//# sourceMappingURL=03-promises.9a0ada21.js.map