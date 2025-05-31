<script>
    // JavaScript para el efecto de la barra de navegación
    document.addEventListener('DOMContentLoaded', function () {
        const mainNav = document.getElementById('mainNav');
        const heroSection = document.querySelector('header');

        let scrollThreshold = 0;

        // Función para calcular el umbral de scroll
        function setScrollThreshold() {
            if (heroSection) {
                scrollThreshold = heroSection.offsetHeight - mainNav.offsetHeight;
            }
        }

        // Llamar al cálculo del umbral inicialmente y al redimensionar la ventana
        setScrollThreshold();
        window.addEventListener('resize', setScrollThreshold);

        window.addEventListener('scroll', function () {
            if (window.scrollY > scrollThreshold) {
                mainNav.classList.add('scrolled');
                document.body.style.scrollPaddingTop = mainNav.offsetHeight + 'px';
            } else {
                mainNav.classList.remove('scrolled');
                document.body.style.scrollPaddingTop = '0px';
            }
        });
    });
</script>