document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) return;

            tabButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-violet-600', 'text-white');
                btn.classList.add('text-gray-400', 'hover:text-[#00D4FF]', 'hover:bg-violet-500');
            });
            button.classList.add('active', 'bg-violet-600', 'text-white');
            button.classList.remove('text-gray-400', 'hover:text-[#00D4FF]', 'hover:bg-violet-500');

            const targetTab = button.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTab);
            const currentPane = document.querySelector('.tab-pane.show');

            const hidePane = (pane) => {
                return new Promise(resolve => {
                    if (!pane) return resolve();
                    pane.classList.remove('show');

                    let fallback;
                    const onTransitionEnd = (e) => {
                        if (e && (e.target !== pane || (e.propertyName && !/opacity|transform/.test(e.propertyName)))) return;
                        pane.removeEventListener('transitionend', onTransitionEnd);
                        clearTimeout(fallback);
                        pane.classList.add('hidden');
                        resolve();
                    };

                    fallback = setTimeout(() => onTransitionEnd({ target: pane, propertyName: 'opacity' }), 350);
                    pane.addEventListener('transitionend', onTransitionEnd);
                });
            };

            const showPane = (pane) => {
                return new Promise(resolve => {
                    if (!pane) return resolve();
                    pane.classList.remove('hidden');
                    // eslint-disable-next-line no-unused-expressions
                    pane.offsetHeight;
                    pane.classList.add('show');

                    let fallback;
                    const onTransitionEnd = (e) => {
                        if (e && (e.target !== pane || (e.propertyName && !/opacity|transform/.test(e.propertyName)))) return;
                        pane.removeEventListener('transitionend', onTransitionEnd);
                        clearTimeout(fallback);
                        resolve();
                    };

                    fallback = setTimeout(() => onTransitionEnd({ target: pane, propertyName: 'opacity' }), 350);
                    pane.addEventListener('transitionend', onTransitionEnd);
                });
            };

            if (currentPane === targetPane) return;

            hidePane(currentPane).then(() => showPane(targetPane));
        });
    });
});