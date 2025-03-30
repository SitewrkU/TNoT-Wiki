document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.closest('.item'); // Замість використання 'item', тут треба визначити його через closest
        const content = item.querySelector('.content-text');
        const imageContainer = item.querySelector('.Moon');
        
        content.classList.toggle('collapsed');
        imageContainer.classList.toggle('collapsed');
    });
});

document.querySelector('.toggle-all-btn').addEventListener('click', () => {
    document.querySelectorAll('.content-text, .Moon').forEach(element => {

        if (!element.classList.contains('collapsed')) {
            element.classList.add('collapsed');
        }
    });
});