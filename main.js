const allPtags = document.querySelectorAll("p");

allPtags.forEach(singleP => {
    var grandParent = singleP.parentElement.parentElement.parentElement.parentElement;
    if(grandParent.classList.contains('single')){
        var gettingPValue = new String(singleP.textContent);
        for(let i = 190; gettingPValue.length; i++){
            if(gettingPValue[i] === ' '){
                console.log(gettingPValue[i] , i);
                var requiredString = gettingPValue.slice(0 , i);
                requiredString += " ...";
                singleP.innerText = requiredString;
                break;
            }
        }
    }
});