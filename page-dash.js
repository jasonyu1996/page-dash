(function(vis_eps){ //vis_eps specifies the threshold (minimum gap on top scrolled required for the button to be visible)
    var createButton = function(x, y){
        var btn = document.createElement('div');
        btn.className = 'page-dash-button';
        btn.style.position = 'fixed';
        btn.style.left = x + 'px';
        btn.style.top = y + 'px';
        return btn;
    };
    var setVis = function(btn){
        if(document.documentElement.scrollTop > vis_eps)
            btn.style.display = '';
        else 
            btn.style.display = 'none';
    };
    var PageDash = function(){
        PageDash.prototype.init = function(arg){
            var x, y;
            if(arg.hasOwnProperty('x') && arg.hasOwnProperty('y')){
                x = Number(arg.x);
                y = Number(arg.y);
            } else if(arg.hasOwnProperty('LeftTop') && arg.LeftTop){
                x = 0;
                y = 0;
            } else if(arg.hasOwnProperty('LeftBottom') && arg.leftBottom){
                x = 0;
                y = window.innerHeight;
            } else if(arg.hasOwnProperty('RightTop') && arg.RightTop){
                x = window.innerWidth;
                y = 0;
            } else{
                x = window.innerWidth;
                y = window.innerHeight;
            }
            var btn = createButton(x, y);
            setVis(btn);
            document.body.appendChild(btn);
            btn.addEventListener('click', function(){
                document.documentElement.scrollTop = 0;
            }, false);
            window.addEventListener('scroll', function(){
              //  console.log('HA');
                setVis(btn);
            }, false);
        };
    };
    window.PageDash = new PageDash();
})(100);

