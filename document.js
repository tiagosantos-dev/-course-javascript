var blg = (function () {
    var beluga = {};
    beluga.$ = document.querySelectorAll.bind(document);
        return beluga;



        function _each(sel , fn){
            var _sel = this.$(sel);
            Array.prototype.forEach.call(_sel, fn);


        }
        beluga.each = _each;



})();