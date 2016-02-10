(function(vis_eps){ //vis_eps specifies the threshold (minimum gap on top scrolled required for the button to be visible)
    var createButton = function(x, y){
        var btn = document.createElement('div');
        btn.className = 'page-dash-button';
        btn.style.position = 'fixed';
        btn.style.left = x + 'px';
        btn.style.top = y + 'px';
        return btn;
    };
    var getVis = function(){
        return document.documentElement.scrollTop > vis_eps;
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
            var vis = getVis();
            if(!vis)
                btn.style.opacity = '0.0';
            else
                btn.style.opacity = '1.0';
            var sid = null; //scrolling instance
            var fid = null; //fading instance
            var clearScroll = function(){
                if(sid){
                    clearInterval(sid);
                    sid = null;
                }
            };
            var clearFade = function(){
                if(fid){
                    clearInterval(fid);
                    fid = null;
                }
            };
            btn.addEventListener('click', function(){
                clearScroll();
                sid = setInterval(function(){
                    document.documentElement.scrollTop -= Math.max(1, Math.min(document.documentElement.scrollTop / 20, 10));
                    if(document.documentElement.scrollTop == 0)
                        clearScroll();
                }, 10);
            }, false);
            window.addEventListener('scroll', function(){
                var nvis = getVis();
                if(nvis ^ vis){
                    vis = nvis;
                    clearFade();
                    if(nvis){
                        var o = Number(btn.style.opacity) * 100;
                        fid = setInterval(function(){
                            o += 3;
                            if(o > 100)
                                o = 100;
                            btn.style.opacity = String(o / 100.0);
                            if(fid == 100)
                                clearFade();
                        }, 10);
                    } else{
                        var o = Number(btn.style.opacity) * 100;
                        fid = setInterval(function(){
                            o -= 3;
                            if(o < 0)
                                o = 0;
                            btn.style.opacity = String(o / 100.0);
                            if(fid == 0)
                                clearFade();
                        }, 10);
                    }
                }
            }, false);
            document.body.appendChild(btn);
        };
    };
    window.PageDash = new PageDash();
})(100);

