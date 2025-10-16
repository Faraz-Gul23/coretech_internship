   // Sample image data
        const images = [
            { src: 'https://picsum.photos/id/1018/800/600', alt: 'Mountain landscape' },
            { src: 'https://picsum.photos/id/1015/800/600', alt: 'Forest path' },
            { src: 'https://picsum.photos/id/1020/800/600', alt: 'Bear in wilderness' },
            { src: 'https://picsum.photos/id/1024/800/600', alt: 'Coastal view' },
            { src: 'https://picsum.photos/id/1035/800/600', alt: 'Lakeside' },
            { src: 'https://picsum.photos/id/1039/800/600', alt: 'Waterfall' },
            { src: 'https://picsum.photos/id/1043/800/600', alt: 'Autumn forest' },
            { src: 'https://picsum.photos/id/1047/800/600', alt: 'City skyline' },
            { src: 'https://picsum.photos/id/1050/800/600', alt: 'Northern lights' }
        ];

        // DOM elements
        const gallery = document.getElementById('gallery');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.getElementById('close-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const imageCounter = document.getElementById('image-counter');

        // Current image index
        let currentIndex = 0;

        // Initialize gallery
        function initGallery() {
            images.forEach((image, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.innerHTML = `<img src="${image.src}" alt="${image.alt}" data-index="${index}">`;
                gallery.appendChild(galleryItem);
            });

            // Add click event to gallery items
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', function() {
                    const index = parseInt(this.querySelector('img').getAttribute('data-index'));
                    openLightbox(index);
                });
            });
        }

        // Open lightbox
        function openLightbox(index) {
            currentIndex = index;
            updateLightboxImage();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Update lightbox image
        function updateLightboxImage() {
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt;
            imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
        }

        // Show next image
        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateLightboxImage();
        }

        // Show previous image
        function showPrevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightboxImage();
        }

        // Event listeners
        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Initialize the gallery
        initGallery();
