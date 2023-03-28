
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
        console.log(value);

        // Проверка мин и макс цену
        if (value < getData().minPrice || value > getData().maxPrice) {
            input.closest('.param__details').classList.add('param__details--error');
        }
        if (value > getData().minPrice && value < getData().maxPrice) {
            input.closest('.param__details').classList.remove('param__details--error');
        }
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
    })
}

export default init;