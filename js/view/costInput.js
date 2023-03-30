import updateModel from "./../utils/updateModel.js";

function init(getData) {
    const input = document.querySelector('#input-cost');

    const settings = {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand',
        delimiter: ' '
    }

    const cleaveInput = new Cleave(input, settings);
    cleaveInput.setRawValue(getData().cost);

    input.addEventListener('input', function () {
        const value = +cleaveInput.getRawValue();

        // Проверка мин и макс цену
        if (value < getData().minPrice || value > getData().maxPrice) {
            input.closest('.param__details').classList.add('param__details--error');
        }
        if (value > getData().minPrice && value < getData().maxPrice) {
            input.closest('.param__details').classList.remove('param__details--error');
        }

        // Обновить модель
        updateModel(input, {cost: value, onUpdate: 'inputCost'});

    });

    input.addEventListener('change', function () {
        const value = +cleaveInput.getRawValue();

        if (value > getData().maxPrice) {
            input.closest('.param__details').classList.add('param__details--error');
            cleaveInput.setRawValue(getData().maxPrice);
        }
        if (value < getData().minPrice) {
            input.closest('.param__details').classList.add('param__details--error');
            cleaveInput.setRawValue(getData().minPrice);
        }

        // Обновить модель
        updateModel(input, {cost: +cleaveInput.getRawValue(), onUpdate: 'inputCost'});
    });

    return cleaveInput;
}

export default init;