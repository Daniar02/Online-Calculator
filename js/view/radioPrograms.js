import updateModel from "./../utils/updateModel.js";
function init(getData) {

    const radioBtnS = document.querySelectorAll('input[name="program"]');
    const {base, it, gov, zero} = getData().programs;

    // Set program rates in radio buttons
    document.querySelector('#base-value').value = base;
    document.querySelector('#it-value').value = it;
    document.querySelector('#gov-value').value = gov;
    document.querySelector('#zero-value').value = zero;

    // Show program rates on page
    document.querySelector('#base-text').innerHTML = base * 100 + '%';
    document.querySelector('#it-text').innerHTML = it * 100  + '%';
    document.querySelector('#gov-text').innerHTML = gov * 100  + '%';
    document.querySelector('#zero-text').innerHTML = zero * 100  + '%';

    radioBtnS.forEach(function (radioBtn) {
        radioBtn.addEventListener('change', function () {

            updateModel(this, {
                onUpdate: 'radioProgram',
                selectedProgram: parseFloat(this.value),
                id: this.id,
            })
        });
    })
}

export default init;