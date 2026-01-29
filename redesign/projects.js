const categories = [
    {
        id: 'game-dev',
        label: 'Game Development',
        isActive: true,
        subcategories: [
            {
                id: 'game-dev-3d',
                label: '3D Art & Level Design',
                isActive: true
            },
            {
                id: 'game-dev-jam',
                label: 'Game Jam Entries',
                isActive: false
            },
            {
                id: 'game-dev-modding',
                label: 'Modding',
                isActive: false
            }
        ]
    },
    {
        id: 'web-dev',
        label: 'Web Development',
        isActive: false,
        subcategories: [
            {
                id: 'web-dev-personal',
                label: 'Personal Projects',
                isActive: true
            },
            {
                id: 'nebula-project',
                label: 'The Nebula Project',
                isActive: false
            }
        ]
    },
    {
        id: 'olympus',
        label: 'Olympus Game Studios',
        isActive: false,
        subcategories: [
            {
                id: 'olympus-game-dev',
                label: 'Game Development',
                isActive: true
            },
            {
                id: 'olympus-web-dev',
                label: 'Web Development',
                isActive: false
            },
            {
                id: 'olympus-software-dev',
                label: 'Software Development',
                isActive: false
            }
        ]
    }
];

const projectsData = {
    'game-dev-3d': [
        {
            title: 'Star Trek in Unreal Engine',
            href: 'projects/star-trek-ue5/star-trek-ue5.html',
            image: 'assets/images/ststuff/StarTrekThumb.jpg',
            subtitle: 'Unreal Engine 5, 3D Art',
            description: 'Explore the work of creating my own Star Trek Sets, blending Starfleet design with Unreal Engine 5\'s cutting-edge technology.'
        },
        {
            title: 'Star Wars Set Design in Unreal Engine',
            href: 'projects/star-wars-ue5.html',
            image: 'assets/images/StarWars/Corridor3.jpg',
            subtitle: 'Unreal Engine 5, Level Design',
            description: 'Look at this Star Wars level I made in Unreal Engine 5.'
        },
        {
            title: 'An Old Mine / New Hideout',
            href: 'projects/hideout.html',
            image: 'assets/images/Hideout/HideoutThumbnail.jpg',
            subtitle: 'UEFN, Level Design',
            description: 'An old mine converted into a hideout for a group of rebels. First project in UEFN.'
        }
    ],
    'game-dev-jam': [
        {
            title: 'STFU: Game Jam Entry',
            href: 'projects/stfu.html',
            image: 'assets/images/STFU/STFU-Thumbnail2.jpg',
            subtitle: 'Game Development, Game Jam, Unity',
            description: 'A puzzle-platformer where you manipulate time and collaborate with your past self to fix temporal anomalies.'
        },
        {
            title: 'Mr. Brown\'s Smuggle Run: Game Jam Entry',
            href: 'projects/mr-brown.html',
            image: 'assets/images/MrB/MrB.jpg',
            subtitle: 'Game Development, Game Jam, Godot',
            description: 'A stealth game where you smuggle contraband into prisons while evading security.'
        }
    ],
    'game-dev-modding': [
        {
            title: 'Fallout Modding',
            href: 'projects/fallout.html',
            image: 'assets/images/falloutwork/falloutthumbnail.jpg',
            subtitle: 'Creation Kit, Modding, Level Design',
            description: 'A look into my work as a level designer on fallout mods.'
        }
    ],
    'web-dev-personal': [
        {
            title: 'Inscribe',
            href: 'projects/c/inscribe.html',
            image: 'assets/images/inscribe/Inscribe Banner.svg',
            subtitle: 'Web Development, Text Editor',
            description: 'A custom google docs like editor.'
        },
        {
            title: 'Whiteboard',
            href: 'projects/c/whiteboard.html',
            image: 'assets/images/whiteboard/WhiteboardBanner.svg',
            subtitle: 'Web Development, Planning',
            description: 'A custom card based planning application.'
        }
    ],
    'nebula-project': [
        {
            title: 'Nebula Browser',
            href: 'projects/Nebula/nebula-browser.html',
            image: 'assets/images/Nebula/NebulaBanner.svg',
            subtitle: 'Desktop Browser, SteamOS & Steam Deck',
            description: 'A desktop web browser designed for SteamOS, Steam Deck, and controller-first navigation.'
        },
        {
            title: 'The Nebula Project',
            href: 'projects/Nebula/nebula-project.html',
            image: 'assets/images/Nebula/NebulaProjectBanner.svg',
            subtitle: 'Open-source Ecosystem',
            description: 'An open-source ecosystem of desktop applications built around controller-friendly UX.'
        }
    ],
    'olympus-game-dev': [
        {
            title: 'Olympus Game Studios',
            href: 'projects/olympus/olympus-game-studio.html',
            image: 'assets/images/Olympus/OlympusBanner.svg',
            subtitle: 'Independent Game & Technology Studio',
            description: 'An independent game and technology studio focused on building original tools, engines, and narrative-driven experiences.'
        },
        {
            title: 'Mount Olympus (Tech Demo)',
            href: 'projects/olympus/mount-olympus.html',
            image: 'assets/images/Olympus/OlympusBanner.svg',
            subtitle: 'Technical Showcase',
            description: 'A technical showcase demonstrating rendering, lighting, tooling, and engine capabilities.'
        }
    ],
    'olympus-web-dev': [
        {
            title: 'Atlas (Internal Tooling)',
            href: 'projects/olympus/atlas.html',
            image: 'assets/images/Olympus/OlympusBanner.svg',
            subtitle: 'Management & Collaboration',
            description: 'Internal planning and collaboration tools used by Olympus to manage projects, documentation, and development workflows.'
        }
    ],
    'olympus-software-dev': [
        {
            title: 'Hephaestus Engine',
            href: 'projects/olympus/hephaestus.html',
            image: 'assets/images/Olympus/HephaestusBanner.svg',
            subtitle: 'Custom C++ Engine',
            description: 'Custom C++ game engine built from the ground up, focused on performance, modern rendering, and bespoke tooling.'
        }
    ]
};

function createProjectCard(project) {
    return `
        <a href="${project.href}" class="project-card glass-effect rounded-2xl overflow-hidden group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
            <div class="relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-auto transition-transform duration-300">
                <div class="project-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-center opacity-0 transition-opacity duration-300">
                    <h3 class="text-2xl font-bold">${project.title}</h3>
                    <p class="mt-2 text-gray-300">${project.description}</p>
                </div>
            </div>
            <div class="p-6">
                <h4 class="text-xl font-bold">${project.title}</h4>
                <p class="text-gray-400">${project.subtitle}</p>
            </div>
        </a>
    `;
}

function renderTabButtons() {
    const buttonContainer = document.getElementById('category-tab-buttons');
    
    if (buttonContainer) {
        buttonContainer.innerHTML = categories.map(category => `
            <button class="tab-button ${category.isActive ? 'active bg-violet-600 text-white' : 'text-gray-400 hover:text-[#00D4FF]'} font-semibold py-2 px-6 rounded-full transition-colors duration-300 hover:bg-violet-500" data-tab="${category.id}">
                ${category.label}
            </button>
        `).join('');
    }
}

function renderSubcategoryButtons(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category || !category.subcategories) return '';
    
    const container = document.getElementById(`${categoryId}-subcats`);
    if (container) {
        container.innerHTML = category.subcategories.map(subcat => `
            <button class="subcat-button ${subcat.isActive ? 'active bg-violet-600 text-white' : 'text-gray-400 hover:text-[#00D4FF]'} font-semibold py-2 px-4 rounded-full text-sm transition-colors duration-300 hover:bg-violet-500" data-subcat="${subcat.id}">
                ${subcat.label}
            </button>
        `).join('');
    }
}

function renderTabPanes() {
    const tabContent = document.getElementById('tab-content');
    
    if (tabContent) {
        tabContent.innerHTML = categories.map(category => `
            <div id="${category.id}" class="tab-pane ${category.isActive ? 'show' : 'hidden'}">
                <div id="${category.id}-subcats" class="flex flex-wrap justify-center mb-8 space-x-2 md:space-x-3"></div>
                <div id="${category.id}-projects" class="flex flex-wrap justify-center gap-8"></div>
            </div>
        `).join('');
        
        // Populate each category
        categories.forEach(category => {
            renderSubcategoryButtons(category.id);
            
            if (category.subcategories) {
                const activeSubcat = category.subcategories.find(s => s.isActive);
                if (activeSubcat) {
                    renderSubcategoryProjects(category.id, activeSubcat.id);
                    
                    // Add show class to projects container for initial state
                    const projectsContainer = document.getElementById(`${category.id}-projects`);
                    if (projectsContainer) {
                        projectsContainer.classList.add('show');
                    }
                }
            }
        });
    }
}

function renderSubcategoryProjects(categoryId, subcategoryId) {
    const projectsContainer = document.getElementById(`${categoryId}-projects`);
    if (projectsContainer && projectsData[subcategoryId]) {
        projectsContainer.innerHTML = projectsData[subcategoryId].map(createProjectCard).join('');
    }
}

function setupTabListeners() {
    // Main category tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');

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

    // Subcategory buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('subcat-button')) {
            const button = e.target;
            if (button.classList.contains('active')) return;

            const parentPane = button.closest('.tab-pane');
            const categoryId = parentPane.id;
            const category = categories.find(c => c.id === categoryId);
            
            if (!category || !category.subcategories) return;

            // Update button states
            const subcatButtons = parentPane.querySelectorAll('.subcat-button');
            subcatButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-violet-600', 'text-white');
                btn.classList.add('text-gray-400', 'hover:text-[#00D4FF]', 'hover:bg-violet-500');
            });
            button.classList.add('active', 'bg-violet-600', 'text-white');
            button.classList.remove('text-gray-400', 'hover:text-[#00D4FF]', 'hover:bg-violet-500');

            // Update active state in categories array
            category.subcategories.forEach(sub => {
                sub.isActive = sub.id === button.getAttribute('data-subcat');
            });

            // Animate projects container
            const projectsContainer = document.getElementById(`${categoryId}-projects`);
            const subcategoryId = button.getAttribute('data-subcat');
            
            const hideProjects = (container) => {
                return new Promise(resolve => {
                    if (!container) return resolve();
                    container.classList.remove('show');

                    let fallback;
                    const onTransitionEnd = (e) => {
                        if (e && (e.target !== container || (e.propertyName && !/opacity|transform/.test(e.propertyName)))) return;
                        container.removeEventListener('transitionend', onTransitionEnd);
                        clearTimeout(fallback);
                        resolve();
                    };

                    fallback = setTimeout(() => onTransitionEnd({ target: container, propertyName: 'opacity' }), 350);
                    container.addEventListener('transitionend', onTransitionEnd);
                });
            };

            const showProjects = (container) => {
                return new Promise(resolve => {
                    if (!container) return resolve();
                    container.classList.add('show');

                    let fallback;
                    const onTransitionEnd = (e) => {
                        if (e && (e.target !== container || (e.propertyName && !/opacity|transform/.test(e.propertyName)))) return;
                        container.removeEventListener('transitionend', onTransitionEnd);
                        clearTimeout(fallback);
                        resolve();
                    };

                    fallback = setTimeout(() => onTransitionEnd({ target: container, propertyName: 'opacity' }), 350);
                    container.addEventListener('transitionend', onTransitionEnd);
                });
            };

            hideProjects(projectsContainer).then(() => {
                renderSubcategoryProjects(categoryId, subcategoryId);
                showProjects(projectsContainer);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTabButtons();
    renderTabPanes();
    setupTabListeners();
});