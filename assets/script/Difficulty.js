document.addEventListener('DOMContentLoaded', () => {

    const difficultySpans = document.querySelectorAll('.DifficultySpan'); 

    difficultySpans.forEach(span => {
        const value = span.textContent.trim(); 
        const [current, total] = value.split('/').map(Number); 

        let bgColor = 'white';

        if(current == 0){
            bgColor = '#8AAB85'; 
        }else if (current >= 1 && current <= 3) {
            bgColor = '#5B9A4C';
        } else if (current >= 4 && current <= 7) {
            bgColor = '#FFB000'; 
        } else if (current >= 8 && current <= 11) {
            bgColor = '#AA5500'; 
        } else if (current >= 12 && current <= 14) {
            bgColor = '#C4281C'; 
        } else if (current >= 15 && current <= 18) {
            bgColor = '#750000';
        } else if (current >= 19 && current <= total) {
            bgColor = '#1C1C3A';
        }

        span.style.backgroundColor = bgColor;
    });


    //СОРТУВАННЯ


    const itemList = document.querySelector(".MoonTypes-list"); 
    const items = Array.from(itemList.querySelectorAll(".item")); 
    const sortButton = document.querySelector("#sortButton"); 
    const resetButton = document.querySelector("#resetButton");
    let ascending = true; 

    const originalOrder = items.map((item, index) => ({ item, index })); //дефолт порядок div

    sortButton.addEventListener("click", () => {
        items.sort((a, b) => {
            const difficultyA = parseInt(a.querySelector(".DifficultySpan").textContent);
            const difficultyB = parseInt(b.querySelector(".DifficultySpan").textContent);
            return ascending ? difficultyA - difficultyB : difficultyB - difficultyA;
        });

        items.forEach(item => itemList.appendChild(item));
        ascending = !ascending; 
    });

    resetButton.addEventListener("click", () => {
        // Відновлюємо оригінальний порядок
        originalOrder
            .sort((a, b) => a.index - b.index) // Сорт за початковими індексами
            .forEach(({ item }) => itemList.appendChild(item));
    });
});