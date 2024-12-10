    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('anterior');
    const nextButton = document.getElementById('proxima');
    const botones = document.getElementById('botones');

        const slides = slider.children;
        const totalSlides = slides.length;
        let currentIndex = 0;

       
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            botones.appendChild(dot);
        }

        const puntos = botones.children;

        function cagarSlide() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            Array.from(puntos).forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            cagarSlide();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            cagarSlide();
        }

        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);

        Array.from(puntos).forEach((dot) => {
            dot.addEventListener('click', (e) => {
                currentIndex = parseInt(e.target.getAttribute('data-index'));
                cagarSlide();
            });
        });

        // Cambio Automatico cada 5 segundos
        setInterval(showNextSlide, 5000);