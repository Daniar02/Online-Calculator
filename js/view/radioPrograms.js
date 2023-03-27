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
    document.querySelector('#base-text').innerHTML = base + '%';
    document.querySelector('#it-text').innerHTML = it + '%';
    document.querySelector('#gov-text').innerHTML = gov + '%';
    document.querySelector('#zero-text').innerHTML = zero + '%';

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