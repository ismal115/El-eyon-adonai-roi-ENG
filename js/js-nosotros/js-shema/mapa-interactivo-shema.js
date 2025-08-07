document.addEventListener('DOMContentLoaded', function () {
    const provinces = document.querySelectorAll('#rd-map-interactive path');
    const tooltip = document.getElementById('province-info');

    const provinceData = {
        'DO-01': {
            name: 'National District',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Reforestation, awareness on Christian values, health and entrepreneurship workshops'
        },
        'DO-02': {
            name: 'Azua',
            status: 'gray',
            year: 2026,
            phase: 'Phase 3',
            activities: 'Educational workshops, violence prevention programs, and support for people with disabilities'
        },
        'DO-03': {
            name: 'Baoruco',
            status: 'gray',
            year: 2027,
            phase: 'Phase 4',
            activities: 'Food distribution, reforestation, educational programs'
        },
        'DO-04': {
            name: 'Barahona',
            status: 'gray',
            year: 2026,
            phase: 'Phase 3',
            activities: 'Educational workshops, violence prevention programs'
        },
        'DO-05': {
            name: 'Dajabón',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Sustainable agriculture workshops, technical training'
        },
        'DO-06': {
            name: 'Duarte',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Medical operations, well construction, vocational workshops'
        },
        'DO-07': {
            name: 'Elías Piña',
            status: 'gray',
            year: 2027,
            phase: 'Phase 4',
            activities: 'Nutrition programs, basic infrastructure'
        },
        'DO-08': {
            name: 'El Seibo',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Preventive health campaigns, entrepreneurship workshops'
        },
        'DO-09': {
            name: 'Espaillat',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Mobile clinics, literacy programs, small business support'
        },
        'DO-30': {
            name: 'Hato Mayor',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Agricultural workshops, environmental conservation programs'
        },
        'DO-10': {
            name: 'Independencia',
            status: 'gray',
            year: 2027,
            phase: 'Phase 4',
            activities: 'Drinking water projects, job training'
        },
        'DO-11': {
            name: 'La Altagracia',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Community tourism, craft workshops'
        },
        'DO-12': {
            name: 'La Romana',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Educational programs, microenterprise support'
        },
        'DO-13': {
            name: 'La Vega',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Health fairs, technology workshops, agricultural support'
        },
        'DO-14': {
            name: 'María Trinidad Sánchez',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Fishing projects, tourism training'
        },
        'DO-15': {
            name: 'Monte Cristi',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Coastal development programs, ecological preservation'
        },
        'DO-16': {
            name: 'Pedernales',
            status: 'gray',
            year: 2027,
            phase: 'Phase 4',
            activities: 'Community infrastructure, sustainability programs'
        },
        'DO-17': {
            name: 'Peravia',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Personal development workshops, agricultural projects'
        },
        'DO-18': {
            name: 'Puerto Plata',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Solidarity tourism, youth programs, hotel training'
        },
        'DO-19': {
            name: 'Hermanas Mirabal',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Educational projects, cultural preservation'
        },
        'DO-20': {
            name: 'Samaná',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Ecotourism, marine conservation programs'
        },
        'DO-21': {
            name: 'San Cristóbal',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Industrial workshops, community programs, SME support'
        },
        'DO-31': {
            name: 'San José de Ocoa',
            status: 'gray',
            year: 2026,
            phase: 'Phase 3',
            activities: 'Organic farming, mountain tourism'
        },
        'DO-22': {
            name: 'San Juan',
            status: 'gray',
            year: 2026,
            phase: 'Phase 3',
            activities: 'Agricultural projects, local crafts'
        },
        'DO-23': {
            name: 'San Pedro de Macorís',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Youth sports programs, technical training'
        },
        'DO-24': {
            name: 'Sánchez Ramírez',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Responsible mining, educational projects'
        },
        'DO-25': {
            name: 'Santiago',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Tech centers, employment programs, industrial fairs'
        },
        'DO-26': {
            name: 'Santiago Rodríguez',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Sustainable agriculture, livestock projects'
        },
        'DO-27': {
            name: 'Valverde',
            status: 'gray',
            year: 2026,
            phase: 'Phase 2',
            activities: 'Agro-industrial projects, technical training'
        },
        'DO-28': {
            name: 'Monseñor Nouel',
            status: 'gray',
            year: 2026,
            phase: 'Phase 3',
            activities: 'Mining-environmental programs, vocational workshops'
        },
        'DO-29': {
            name: 'Monte Plata',
            status: 'orange',
            year: 2025,
            phase: 'Phase 1',
            activities: 'Agroforestry projects, environmental education'
        },
        'DO-32': {
            name: 'Santo Domingo',
            status: 'red',
            year: 2024,
            phase: 'Phase 1',
            activities: 'Urban programs, tech training, entrepreneur support'
        }
    };

    provinces.forEach(province => {
        const provinceId = province.id;
        if (provinceData[provinceId]) {
            province.classList.add(provinceData[provinceId].status);
        }

        province.addEventListener('mouseenter', function (e) {
            const provinceId = this.id;
            const data = provinceData[provinceId];

            if (data) {
                const svgRect = document.getElementById('rd-map-interactive').getBoundingClientRect();
                const pathRect = this.getBoundingClientRect();

                const x = pathRect.left - svgRect.left + (pathRect.width / 2);
                const y = pathRect.top - svgRect.top;

                tooltip.innerHTML = `
                <h3>${data.name}</h3>
                <p><strong>Status:</strong> ${getStatusName(data.status)}</p>
                <p><strong>Year:</strong> ${data.year}</p>
                <p><strong>Activities:</strong> ${data.activities}</p>
                `;

                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
                tooltip.style.display = 'block';
            }
        });

        province.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });

    document.querySelectorAll('#rd-map-interactive path').forEach(province => {
        province.addEventListener('mouseenter', function (e) {
            const provinceId = this.id;
            const data = provinceData[provinceId];

            if (data) {
                const tooltip = document.getElementById('province-info');
                const svgRect = document.getElementById('rd-map-interactive').getBoundingClientRect();
                const pathRect = this.getBoundingClientRect();

                const x = pathRect.left - svgRect.left + (pathRect.width / 2);
                const y = pathRect.top - svgRect.top;

                tooltip.innerHTML = `
                    <h3>${data.name}</h3>
                    <p><strong>Status:</strong> ${getStatusName(data.status)}</p>
                    <p><strong>Year:</strong> ${data.year}</p>
                    <p><strong>Activities:</strong> ${data.activities}</p>
                `;

                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y + 20}px`;
                tooltip.style.display = 'block';

                const tooltipRect = tooltip.getBoundingClientRect();
                const overflowRight = tooltipRect.right - window.innerWidth;

                if (overflowRight > 0) {
                    tooltip.style.left = `${x - overflowRight - 10}px`;
                }
            }
        });

        province.addEventListener('mouseleave', function () {
            document.getElementById('province-info').style.display = 'none';
        });
    });

    function getStatusName(status) {
        const statusMap = {
            'gray': 'Not visited',
            'brown': 'Visited',
            'orange': 'In action',
            'red': 'Functional'
        };
        return statusMap[status] || 'Undefined';
    }
});
