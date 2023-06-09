function Carousel(config){
    this.container = ( typeof config.container === 'string') ? 
    document.querySelector(config.container) : config.container

    this.items = (typeof config.items === 'string') ? 
    this.container.querySelectorAll(config.items) : config.items

    this.btnPrev = (typeof config.btnPrev === 'string') ? 
    this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ? 
    this.container.querySelector(config.btnNext) : config.btnNext

    var _this = this;
    var _currentSlide = 0;

    init()
    
    function init(){
        var _show = _this.container.querySelectorAll('.show')

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        _this.items[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')

        addListeners()

        function addListeners(){
            _this.btnNext.addEventListener('click', showNextSlide)
            _this.btnPrev.addEventListener('click', showPrevSlide)
        }

        function showNextSlide(){
            ++_currentSlide;
            showSlide()
        }

        function showPrevSlide(){
            --_currentSlide;
            showSlide()
        }

        function showSlide(){
            var qtd = _this.items.length;
            var slide = _currentSlide % qtd
            slide = Math.abs(slide);

            _this.container.querySelector('.show').classList.remove('show');
            _this.items[slide].classList.add('show')
            
        }
    }
}