let score = 0;

// Drag events
const items = document.querySelectorAll('.item');
const bins = document.querySelectorAll('.bin');

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
    });
});

bins.forEach((bin) => {
    bin.addEventListener('dragover', (e) => {
        e.preventDefault(); // Allow dropping
    });

    bin.addEventListener('drop', (e) => {
        const itemId = e.dataTransfer.getData('text');
        const item = document.getElementById(itemId);

        // Check if the item is dropped into the correct bin
        if (
            (itemId === 'plastic-item' && bin.id === 'plastic-bin') ||
            (itemId === 'paper-item' && bin.id === 'paper-bin') ||
            (itemId === 'glass-item' && bin.id === 'glass-bin')
        ) {
            score++;
            document.getElementById('score').textContent = score;

            // Remove item from the game
            item.style.display = 'none';
        } else {
            alert('Wrong bin! Try again.');
        }
    });
});
