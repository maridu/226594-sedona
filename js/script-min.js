var formToggleButton=document.querySelector(".button-show-form"),form=document.querySelector(".appointment-form"),dateIn=document.querySelector("[name=date-in]"),dateOut=document.querySelector("[name=date-out]"),adultsAmount=document.querySelector("[name=adults]"),childrenAmount=document.querySelector("[name=children]"),adultsLessButton=document.querySelector(".adults-less"),adultsMoreButton=document.querySelector(".adults-more"),childrenLessButton=document.querySelector(".children-less"),childrenMoreButton=document.querySelector(".children-more"),formSearchButton=document.querySelector(".button-search"),filterButton=document.querySelector(".button-show"),filterForm=document.querySelector(".form-filter");form&&form.classList.add("form-hidden"),formToggleButton&&formToggleButton.addEventListener("click",function(t){if(t.preventDefault(),form.classList.toggle("form-hidden"),!form.classList.contains("form-hidden")){dateIn.focus();var e=localStorage.getItem("adults");adultsAmount.value=e;var o=localStorage.getItem("children");childrenAmount.value=o}}),adultsLessButton&&adultsAmount&&adultsLessButton.addEventListener("click",function(t){t.preventDefault,adultsAmount.value=Math.round(adultsAmount.value)-1}),adultsMoreButton&&adultsAmount&&adultsMoreButton.addEventListener("click",function(t){t.preventDefault,adultsAmount.value=Math.round(adultsAmount.value)+1}),childrenLessButton&&childrenAmount&&childrenLessButton.addEventListener("click",function(t){t.preventDefault,childrenAmount.value=Math.round(childrenAmount.value)-1}),childrenMoreButton&&childrenAmount&&childrenMoreButton.addEventListener("click",function(t){t.preventDefault,childrenAmount.value=Math.round(childrenAmount.value)+1}),formSearchButton&&formSearchButton.addEventListener("click",function(t){!dateIn.value||!dateOut.value||!adultsAmount.value||adultsAmount.value<=0||childrenAmount.value<0||(0^adultsAmount.value)!=adultsAmount.value||(0^childrenAmount.value)!=childrenAmount.value?(t.preventDefault(),form.classList.remove("form-error"),form.offsetWidth=form.offsetWidth,form.classList.add("form-error")):(form.classList.contains("form-error")&&(form.classList.remove("form-error"),form.submit()),localStorage.setItem("adults",adultsAmount.value),localStorage.setItem("children",childrenAmount.value))}),filterButton&&filterButton.addEventListener("click",function(t){t.preventDefault(),filterForm.submit()});