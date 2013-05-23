
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

//exit script
jQuery(document).ready(function($) {
  // Creating custom :external selector
	   $.expr[':'].external = function(obj){
              return !obj.href.match(/^mailto\:/)
              && (obj.hostname != "")
              && (obj.hostname.indexOf("mcc.gov", obj.hostname.length-7)==-1);
              };

		
		// Add 'external' CSS class to all external links
		$('a:external').addClass('external');
		$('a:external').attr('rel', 'external');
		$('a:external').after(' <i class="icon-share"></i>');
		$('.external').click(function() {
			var link = $(this).attr('href');
			$(this).after('<div class="modal hide" id="exit"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">×</button><h3>You are now leaving mcc.gov</h3></div><div class="modal-body"><p>You are leaving the Millennium Challenge Corporation public web site and are going to the following link: <a href="'+(link)+'">'+(link)+'</a></p><p>You should be automatically redirected in a few moments. If not, please click the link above.</p></div><div class="modal-footer"></div></div>');
			$(this).attr('data-toggle', 'modal');
			$(this).attr('href', '#exit');
			 window.setTimeout ( function() {
             	$('#exit').fadeOut(500, function() { 
					window.location = link; 
				}) }
             , 5000);
			 
		});
	});		
	
//fancyzoom
(function(a){a.fn.fancyZoom=function(p){var p=p||{};var m=p&&p.directory?p.directory:"/_/img/fancyzoom";var e=false;if(a("#zoom").length==0){var f=a.browser.msie?"gif":"png";var k='<div id="zoom" style="display:none;">                   <table id="zoom_table" style="border-collapse:collapse; width:100%; height:100%;">                     <tbody>                       <tr>                         <td class="tl" style="background:url('+m+"/tl."+f+') 0 0 no-repeat; width:20px; height:20px; overflow:hidden;" />                         <td class="tm" style="background:url('+m+"/tm."+f+') 0 0 repeat-x; height:20px; overflow:hidden;" />                         <td class="tr" style="background:url('+m+"/tr."+f+') 100% 0 no-repeat; width:20px; height:20px; overflow:hidden;" />                       </tr>                       <tr>                         <td class="ml" style="background:url('+m+"/ml."+f+') 0 0 repeat-y; width:20px; overflow:hidden;" />                         <td class="mm" style="background:#fff; vertical-align:top; padding:10px;">                           <div id="zoom_content">                           </div>                         </td>                         <td class="mr" style="background:url('+m+"/mr."+f+') 100% 0 repeat-y;  width:20px; overflow:hidden;" />                       </tr>                       <tr>                         <td class="bl" style="background:url('+m+"/bl."+f+') 0 100% no-repeat; width:20px; height:20px; overflow:hidden;" />                         <td class="bm" style="background:url('+m+"/bm."+f+') 0 100% repeat-x; height:20px; overflow:hidden;" />                         <td class="br" style="background:url('+m+"/br."+f+') 100% 100% no-repeat; width:20px; height:20px; overflow:hidden;" />                       </tr>                     </tbody>                   </table>                   <a href="#" title="Close" id="zoom_close" style="position:absolute; top:0; left:0;">                     <img src="'+m+"/closebox."+f+'" alt="Close" style="border:none; margin:0; padding:0;" />                   </a>                 </div>';a("body").append(k);a("html").click(function(q){if(a(q.target).parents("#zoom:visible").length==0){l();}});a(document).keyup(function(q){if(q.keyCode==27&&a("#zoom:visible").length>0){l();}});a("#zoom_close").click(l);}var o=a("#zoom");var j=a("#zoom_table");var i=a("#zoom_close");var h=a("#zoom_content");var b=a("td.ml,td.mm,td.mr");this.each(function(q){a(a(this).attr("href")).hide();a(this).click(n);});return this;function n(w){if(e){return false;}e=true;var q=a(a(this).attr("href"));var u=p.width;var v=p.height;var r=window.innerWidth||(window.document.documentElement.clientWidth||window.document.body.clientWidth);var E=window.innerHeight||(window.document.documentElement.clientHeight||window.document.body.clientHeight);var C=window.pageXOffset||(window.document.documentElement.scrollLeft||window.document.body.scrollLeft);var B=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop);var F={width:r,height:E,x:C,y:B};var r=(u||q.width())+60;var E=(v||q.height())+60;var z=F;var A=Math.max((z.height/2)-(E/2)+B,0);var D=(z.width/2)-(r/2);var s=w.pageY;var t=w.pageX;i.attr("curTop",s);i.attr("curLeft",t);i.attr("scaleImg",p.scaleImg?"true":"false");a("#zoom").hide().css({position:"absolute",top:s+"px",left:t+"px",width:"1px",height:"1px"});g();i.hide();if(p.closeOnClick){a("#zoom").click(l);}if(p.scaleImg){h.html(q.html());a("#zoom_content img").css("width","100%");}else{h.html("");}a("#zoom").animate({top:A+"px",left:D+"px",opacity:"show",width:r,height:E},500,null,function(){if(p.scaleImg!=true){h.html(q.html());}d();i.show();e=false;});return false;}function l(){if(e){return false;}e=true;a("#zoom").unbind("click");g();if(i.attr("scaleImg")!="true"){h.html("");}i.hide();a("#zoom").animate({top:i.attr("curTop")+"px",left:i.attr("curLeft")+"px",opacity:"hide",width:"1px",height:"1px"},500,null,function(){if(i.attr("scaleImg")=="true"){h.html("");}d();e=false;});return false;}function c(s){a("#zoom_table td").each(function(u){var t=a(this).css("background-image").replace(/\.(png|gif|none)\"\)$/,"."+s+'")');a(this).css("background-image",t);});var r=i.children("img");var q=r.attr("src").replace(/\.(png|gif|none)$/,"."+s);r.attr("src",q);}function g(){if(a.browser.msie&&parseFloat(a.browser.version)>=7){c("gif");}}function d(){if(a.browser.msie&&a.browser.version>=7){c("png");}}};})(jQuery);
/*
	TableOfContents Plugin for jQuery (by Doug Neiner)
	
	Version: 0.8
		
	Based on code and concept by Janko Jovanovic 
	  in his article: http://www.jankoatwarpspeed.com/post/2009/08/20/Table-of-contents-using-jQuery.aspx
	
	This plugin is offered under the MIT license.
	(c) 2009 by Doug Neiner, http://dougneiner.com
*/
(function($){$.TableOfContents=function(el,scope,options){var base=this;base.$el=$(el);base.el=el;base.toc="";base.listStyle=null;base.tags=["h1","h2","h3","h4","h5","h6"];base.init=function(){base.options=$.extend({},$.TableOfContents.defaultOptions,options);if(typeof(scope)=="undefined"||scope==null)scope=document.body;base.$scope=$(scope);var $first=base.$scope.find(base.tags.join(', ')).filter(':first');if($first.length!=1)return;base.starting_depth=base.options.startLevel;if(base.options.depth<1)base.options.depth=1;var filtered_tags=base.tags.splice(base.options.startLevel-1,base.options.depth);base.$headings=base.$scope.find(filtered_tags.join(', '));if(base.options.topLinks!==false){var id=$(document.body).attr('id');if(id==""){id=base.options.topBodyId;document.body.id=id};base.topLinkId=id};if(base.$el.is('ul')){base.listStyle='ul'}else if(base.$el.is('ol')){base.listStyle='ol'};base.buildTOC();if(base.options.proportionateSpacing===true&&!base.tieredList()){base.addSpacing()};return base};base.tieredList=function(){return(base.listStyle=='ul'||base.listStyle=='ol')};base.buildTOC=function(){base.current_depth=base.starting_depth;base.$headings.each(function(i,element){var depth=this.nodeName.toLowerCase().substr(1,1);if(i>0||(i==0&&depth!=base.current_depth)){base.changeDepth(depth)};base.toc+=base.formatLink(this,depth,i)+"\n";if(base.options.topLinks!==false)base.addTopLink(this)});base.changeDepth(base.starting_depth,true);if(base.tieredList())base.toc="<li>\n"+base.toc+"</li>\n";base.$el.html(base.toc)};base.addTopLink=function(element){var text=(base.options.topLinks===true?"Top":base.options.topLinks);var $a=$("<a href='#"+base.topLinkId+"' class='"+base.options.topLinkClass+"'></a>").html(text);$(element).append($a)};base.formatLink=function(element,depth,index){var id=element.id;if(id==""){id=base.buildSlug($(element).text());element.id=id};var a="<a href='#"+id+"'";if(!base.tieredList())a+=" class='"+base.depthClass(depth)+"'";a+=">"+base.options.levelText.replace('%',$(element).text())+'</a>';return a};base.changeDepth=function(new_depth,last){if(last!==true)last=false;if(!base.tieredList()){base.current_depth=new_depth;return true};if(new_depth>base.current_depth){var opening_tags=[];for(var i=base.current_depth;i<new_depth;i++){opening_tags.push('<'+base.listStyle+'>'+"\n")};var li="<li>\n";base.toc+=opening_tags.join(li)+li}else if(new_depth<base.current_depth){var closing_tags=[];for(var i=base.current_depth;i>new_depth;i--){closing_tags.push('</'+base.listStyle+'>'+"\n")};base.toc+="</li>\n"+closing_tags.join('</li>'+"\n");if(!last){base.toc+="</li>\n<li>\n"}}else{if(!last){base.toc+="</li>\n<li>\n"}};base.current_depth=new_depth};base.buildSlug=function(text){text=text.toLowerCase().replace(/[^a-z0-9 -]/gi,'').replace(/ /gi,'-');text=text.substr(0,50);return text};base.depthClass=function(depth){return base.options.levelClass.replace('%',(depth-(base.starting_depth-1)))};base.addSpacing=function(){var start=base.$headings.filter(':first').position().top;base.$headings.each(function(i,el){var $a=base.$el.find('a:eq('+i+')');var pos=(($(this).position().top-start)/(base.$scope.height()-start))*base.$el.height();$a.css({position:"absolute",top:pos})})};return base.init()};$.TableOfContents.defaultOptions={startLevel:1,depth:3,levelClass:"toc-depth-%",levelText:"%",topLinks:false,topLinkClass:"toc-top-link",topBodyId:"toc-top",proportionateSpacing:false};$.fn.tableOfContents=function(scope,options){return this.each(function(){var toc=new $.TableOfContents(this,scope,options);delete toc})}})(jQuery);
/*
 * jquery.rs.carousel.js v0.8.6
 *
 * Copyright (c) 2011 Richard Scarrott
 * http://www.richardscarrott.co.uk
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Depends:
 *  jquery.js v1.4+
 *  jquery.ui.widget.js v1.8+
 *
 */
 
(function ($, undefined) {

    var _super = $.Widget.prototype,
        horizontal = {
            pos: 'left',
            pos2: 'right',
            dim: 'width'
        },
        vertical = {
            pos: 'top',
            pos2: 'bottom',
            dim: 'height'
        };
    
    $.widget('rs.carousel', {

        options: {
            itemsPerPage: 'auto',
            itemsPerTransition: 'auto',
            orientation: 'horizontal',
            loop: false,
            nextPrevActions: true,
            insertPrevAction: function () {
                return $('<a href="#" class="rs-carousel-action-prev">Prev</a>').appendTo(this);
            },
            insertNextAction: function () {
                return $('<a href="#" class="rs-carousel-action-next">Next</a>').appendTo(this);
            },
            pagination: true,
            insertPagination: function (pagination) {
                return $(pagination).insertAfter($(this).find('.rs-carousel-mask'));
            },
            speed: 'normal',
            easing: 'swing',

            // callbacks
            create: null,
            before: null,
            after: null
        },

        _create: function () {

            this.page = 1;
            this._elements();
            this._defineOrientation();
            this._addMask();
            this._addNextPrevActions();
            this.refresh(false);

            return;
        },

        // caches DOM elements
        _elements: function () {

            var elems = this.elements = {},
                baseClass = '.' + this.widgetBaseClass;

            elems.mask = this.element.children(baseClass + '-mask');
            elems.runner = this.element.find(baseClass + '-runner').first();
            elems.items = elems.runner.children(baseClass + '-item');
            elems.pagination = undefined;
            elems.nextAction = undefined;
            elems.prevAction = undefined;

            return;
        },

        _addClasses: function () {

            if (!this.oldClass) {
                this.oldClass = this.element[0].className;
            }

            this._removeClasses();

            var baseClass = this.widgetBaseClass,
                classes = [];

            classes.push(baseClass);
            classes.push(baseClass + '-' + this.options.orientation);
            classes.push(baseClass + '-items-' + this.options.itemsPerPage);

            this.element.addClass(classes.join(' '));

            return;
        },

        // removes rs-carousel* classes
        _removeClasses: function () {

            var self = this,
                widgetClasses = [];

            this.element.removeClass(function (i, classes) {

                $.each(classes.split(' '), function (i, value) {

                    if (value.indexOf(self.widgetBaseClass) !== -1) {
                        widgetClasses.push(value);
                    }

                });

                return widgetClasses.join(' ');

            });

            return;
        },

        // defines obj to hold strings based on orientation for dynamic method calls
        _defineOrientation: function () {

            if (this.options.orientation === 'horizontal') {
                this.isHorizontal = true;
                this.helperStr = horizontal;
            }
            else {
                this.isHorizontal = false;
                this.helperStr = vertical;
            }

            return;
        },

        // adds masking div (aka clipper)
        _addMask: function () {

            var elems = this.elements;

            // already exists in markup
            if (elems.mask.length) {
                return;
            }

            elems.mask = elems.runner
                .wrap('<div class="' + this.widgetBaseClass + '-mask" />')
                .parent();

            // indicates whether mask was dynamically added or already existed in mark-up
            this.maskAdded = true;

            return;
        },

        // sets runners width
        _setRunnerWidth: function () {

            if (!this.isHorizontal) {
                return;
            }
            
            var self = this;

            this.elements.runner.width(function () {
                return self._getItemDim() * self.getNoOfItems();
            });

            return;
        },

        // sets itemDim to the dimension of first item incl. margin
        _getItemDim: function () {

            // is this ridiculous??
            return this.elements.items
                ['outer' + this.helperStr.dim.charAt(0).toUpperCase() + this.helperStr.dim.slice(1)](true);

        },

        getNoOfItems: function () {
            
            return this.elements.items.length;
             
        },

        // adds next and prev links
        _addNextPrevActions: function () {

            if (!this.options.nextPrevActions) {
                return;
            }

            var self = this,
                elems = this.elements,
                opts = this.options;
                
            this._removeNextPrevActions();

            elems.prevAction = opts.insertPrevAction.apply(this.element[0])
                .bind('click.' + this.widgetName, function (e) {
                    e.preventDefault();
                    self.prev();
                });

            elems.nextAction = opts.insertNextAction.apply(this.element[0])
                .bind('click.' + this.widgetName, function (e) {
                    e.preventDefault();
                    self.next();
                });
            
            return;
        },

        _removeNextPrevActions: function () {
        
            var elems = this.elements;
        
            if (elems.nextAction) {
                elems.nextAction.remove();
                elems.nextAction = undefined;
            }   
            
            if (elems.prevAction) {
                elems.prevAction.remove();
                elems.prevAction = undefined;
            }
            
            return; 
        },

        // adds pagination links and binds associated events
        _addPagination: function () {

            if (!this.options.pagination) {
                return;
            }

            var self = this,
                elems = this.elements,
                opts = this.options,
                baseClass = this.widgetBaseClass,
                pagination = $('<ol class="' + baseClass + '-pagination" />'),
                links = [],
                noOfPages = this.getNoOfPages(),
                i;
                
            this._removePagination();

            for (i = 1; i <= noOfPages; i++) {
                links[i] = '<li class="' + baseClass + '-pagination-link"><a href="#page-' + i + '">' + i + '</a></li>';
            }

            pagination
                .append(links.join(''))
                .delegate('a', 'click.' + this.widgetName, function (e) {
                    e.preventDefault();
                    self.goToPage(parseInt(this.hash.split('-')[1], 10));
                });
            
            this.elements.pagination = this.options.insertPagination.call(this.element[0], pagination);
            
            return;
        },

        _removePagination: function () {
        
            if (this.elements.pagination) {
                this.elements.pagination.remove();
                this.elements.pagination = undefined;
            }
            
            return;
        },

        // sets array of pages
        _setPages: function () {

            var index = 1,
                page = 0,
                noOfPages = this.getNoOfPages();
                
            this.pages = [];
            
            while (page < noOfPages) {
                
                // if index is greater than total number of items just go to last
                if (index > this.getNoOfItems()) {
                    index = this.getNoOfItems();
                }

                this.pages[page] = index;
                index += this.getItemsPerTransition(); // this.getItemsPerPage(index);
                page++;
            }

            return;
        },

        getPages: function () {
            
            return this.pages;

        },

        // returns noOfPages
        getNoOfPages: function () {

            var itemsPerTransition = this.getItemsPerTransition();

            // #18 - ensure we don't return Infinity
            if (itemsPerTransition <= 0) {
                return 0;
            }

            return Math.ceil((this.getNoOfItems() - this.getItemsPerPage()) / itemsPerTransition) + 1;

        },

        // returns options.itemsPerPage. If not a number it's calculated based on maskdim
        getItemsPerPage: function () {

            // if itemsPerPage of type number don't dynamically calculate
            if (typeof this.options.itemsPerPage === 'number') {
                return this.options.itemsPerPage;
            }
            
            return Math.floor(this._getMaskDim() / this._getItemDim());

        },

        getItemsPerTransition: function () {

            if (typeof this.options.itemsPerTransition === 'number') {
                return this.options.itemsPerTransition;
            }

            return this.getItemsPerPage();
            
        },

        _getMaskDim: function () {
            
            return this.elements.mask[this.helperStr.dim]();

        },

        next: function (animate) {

            var page = this.page + 1;

            if (this.options.loop && page > this.getNoOfPages()) {
                page = 1;
            }
            
            this.goToPage(page, animate);

            return;
        },

        prev: function (animate) {

            var page = this.page - 1;

            if (this.options.loop && page < 1) {
                page = this.getNoOfPages();
            }
            
            this.goToPage(page, animate);

            return;
        },

        // shows specific page (one based)
        goToPage: function (page, animate) {

            if (!this.options.disabled && this._isValid(page)) {
                this.prevPage = this.page;
                this.page = page;
                this._go(animate);
            }
            
            return;
        },

        // returns true if page index is valid, false if not
        _isValid: function (page) {
            
            if (page <= this.getNoOfPages() && page >= 1) {
                return true;
            }
            
            return false;
        },

        // returns valid page index
        _makeValid: function (page) {
                
            if (page < 1) {
                page = 1;
            }
            else if (page > this.getNoOfPages()) {
                page = this.getNoOfPages();
            }

            return page;
        },

        // abstract _slide to easily override within extensions
        _go: function (animate) {
            
            this._slide(animate);

            return;
        },

        _slide: function (animate) {

            var self = this,
                animate = animate === false ? false : true, // undefined should pass as true
                speed = animate ? this.options.speed : 0,
                animateProps = {},
                lastPos = this._getAbsoluteLastPos(),
                pos = this.elements.items
                    .eq(this.pages[this.page - 1] - 1) // arrays and .eq() are zero based, carousel is 1 based
                        .position()[this.helperStr.pos];

            // check pos doesn't go past last posible pos
            if (pos > lastPos) {
                pos = lastPos;
            }

            // might be nice to put animate on event object:
            // $.Event('slide', { animate: animate }) - would require jQuery 1.6+
            this._trigger('before', null, {
                elements: this.elements,
                animate: animate
            });

            animateProps[this.helperStr.pos] = -pos;
            this.elements.runner
                .stop()
                .animate(animateProps, speed, this.options.easing, function () {
                    
                    self._trigger('after', null, {
                        elements: self.elements,
                        animate: animate
                    });

                });
                
            this._updateUi();

            return;
        },

        // gets lastPos to ensure runner doesn't move beyond mask (allowing mask to be any width and the use of margins)
        _getAbsoluteLastPos: function () {
            
            var lastItem = this.elements.items.eq(this.getNoOfItems() - 1);
            
            return lastItem.position()[this.helperStr.pos] + this._getItemDim() -
                    this._getMaskDim() - parseInt(lastItem.css('margin-' + this.helperStr.pos2), 10);

        },

        // updates pagination, next and prev link status classes
        _updateUi: function () {

            if (this.options.pagination) {
                this._updatePagination();
            }

            if (this.options.nextPrevActions) {
                this._updateNextPrevActions();
            }

            return;
        },

        _updatePagination: function () {
            
            var baseClass = this.widgetBaseClass,
                activeClass = baseClass + '-pagination-link-active';

            this.elements.pagination
                .children('.' + baseClass + '-pagination-link')
                    .removeClass(activeClass)
                    .eq(this.page - 1)
                        .addClass(activeClass);

            return;
        },

        _updateNextPrevActions: function () {
            
            var elems = this.elements,
                page = this.page,
                disabledClass = this.widgetBaseClass + '-action-disabled';

            elems.nextAction
                .add(elems.prevAction)
                    .removeClass(disabledClass);

            if (!this.options.loop) {
                
                if (page === this.getNoOfPages()) {
                    elems.nextAction.addClass(disabledClass);
                }
                else if (page === 1) {
                    elems.prevAction.addClass(disabledClass);
                }

            }

            return;
        },

        // formalise appending items as continuous adding complexity by inserting
        // cloned items
        add: function (items) {

            this.elements.runner.append(items);
            this.refresh();

            return;
        },

        remove: function (selector) {
            
            if (this.getNoOfItems() > 0) {

                this.elements.items
                    .filter(selector)
                    .remove();

                this.refresh();
            }

            return;
        },

        // handles option updates
        _setOption: function (option, value) {

            var requiresRefresh = [
                'itemsPerPage',
                'itemsPerTransition',
                'orientation'
            ];      

            _super._setOption.apply(this, arguments);

            switch (option) {

            case 'orientation':
            
                this.elements.runner
                    .css(this.helperStr.pos, '')
                    .width('');

                this._defineOrientation();

                break;

            case 'pagination':

                if (value) {
                    this._addPagination();
                    this._updateUi();
                }
                else {
                    this._removePagination();
                }

                break;

            case 'nextPrevActions':

                if (value) {
                    this._addNextPrevActions();
                    this._updateUi();
                }
                else {
                    this._removeNextPrevActions();
                }

                break;

            case 'loop':

                this._updateUi();

                break;
            }

            if ($.inArray(option, requiresRefresh) !== -1) {
                this.refresh();
            }

            return;
        },

        // if no of items is less than items per page we disable carousel
        _checkDisabled: function () {
            
            if (this.getNoOfItems() <= this.getItemsPerPage()) {
                this.elements.runner.css(this.helperStr.pos, '');
                this.disable();
            }
            else {
                this.enable();
            }

            return;
        },

        // refresh carousel
        refresh: function (recache) {

            // assume true (undefined should pass condition)
            if (recache !== false) {
                this._recacheItems();
            }

            this._addClasses();
            this._setPages();
            this._addPagination();
            this._checkDisabled();
            this._setRunnerWidth();
            this.page = this._makeValid(this.page);
            this.goToPage(this.page, false);

            return;
        },

        // re-cache items in case new items have been added,
        // moved to own method so continuous can easily override
        // to avoid clones
        _recacheItems: function () {

            this.elements.items = this.elements.runner
                .children('.' + this.widgetBaseClass + '-item');

            return;
        },

        // returns carousel to original state
        destroy: function () {

            var elems = this.elements,
                cssProps = {};

            this.element
                .removeClass()
                .addClass(this.oldClass);
            
            if (this.maskAdded) {
                elems.runner
                    .unwrap('.' + this.widgetBaseClass + '-mask');
            }

            cssProps[this.helperStr.pos] = '';
            cssProps[this.helperStr.dim] = '';
            elems.runner.css(cssProps);
            
            this._removePagination();
            this._removeNextPrevActions();
            
            _super.destroy.apply(this, arguments);

            return;
        },

        getPage: function () {
            
            return this.page;

        },

        getPrevPage: function () {
            
            return this.prevPage;

        },

        // item can be $obj, element or 1 based index
        goToItem: function (index, animate) {

            // assume element or jQuery obj
            if (typeof index !== 'number') {
                index = this.elements.items.index(index) + 1;
            }

            if (index <= this.getNoOfItems()) {
                this.goToPage(Math.ceil(index / this.getItemsPerTransition()), animate);
            }

            return;
        }

    });
    
    $.rs.carousel.version = '0.8.6';

})(jQuery);
/*
 * jquery.rs.carousel-autoscroll v0.8.6
 *
 * Copyright (c) 2011 Richard Scarrott
 * http://www.richardscarrott.co.uk
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Depends:
 *  jquery.js v1.4+
 *  jquery.ui.widget.js v1.8+
 *  jquery.rs.carousel.js v0.8.6+
 *
 */
 
(function($, undefined) {

    var _super = $.rs.carousel.prototype;
    
    $.widget('rs.carousel', $.rs.carousel, {
    
        options: {
            pause: 8000,
            autoScroll: false
        },
        
        _create: function() {
        
            _super._create.apply(this);
            
            if (!this.options.autoScroll) {
                return;
            }
            
            this._bindAutoScroll();
            this._start();
            
            return;
        },
        
        _bindAutoScroll: function() {
            
            if (this.autoScrollInitiated) {
                return;
            }
            
            this.element
                .bind('mouseenter.' + this.widgetName, $.proxy(this, '_stop'))
                .bind('mouseleave.' + this.widgetName, $.proxy(this, '_start'));
                
            this.autoScrollInitiated = true;
            
            return;
        },
        
        _unbindAutoScroll: function() {
            
            this.element
                .unbind('mouseenter.' + this.widgetName)
                .unbind('mouseleave.' + this.widgetName);
                
            this.autoScrollInitiated = false;
            
            return;
        },
        
        _start: function() {
        
            var self = this;
            
            // ensures interval isn't started twice
            this._stop();
            
            this.interval = setInterval(function() {

                if (self.page === self.getNoOfPages()) {
                    self.goToPage(1);
                }
                else {
                    self.next();
                }
            
            }, this.options.pause);
            
            return;
        },
        
        _stop: function() {
        
            clearInterval(this.interval);
            
            return;     
        },
        
        _setOption: function (option, value) {
        
            _super._setOption.apply(this, arguments);
            
            switch (option) {
                
            case 'autoScroll':
            
                this._stop();
                
                if (value) {
                    this._bindAutoScroll();
                    this._start();
                }
                else {
                    this._unbindAutoScroll();
                }
                
                break;
                    
            }
            
            return;
        },
        
        destroy: function() {
            
            this._stop();
            _super.destroy.apply(this);
            
            return;
        }
        
    });
    
})(jQuery);
/*
 * jquery.rs.carousel-continuous v0.8.6
 *
 * Copyright (c) 2011 Richard Scarrott
 * http://www.richardscarrott.co.uk
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Depends:
 *  jquery.js v1.4+
 *  jquery.ui.widget.js v1.8+
 *  jquery.rs.carousel.js v0.8.6+
 *
 */
 
(function($, undefined) {

    var _super = $.rs.carousel.prototype;
    
    $.widget('rs.carousel', $.rs.carousel, {
    
        options: {
            continuous: false
        },
        
        _create: function () {
        
            _super._create.apply(this, arguments);

            if (this.options.continuous) {

                this._setOption('loop', true);
                this._addClonedItems();
                this.goToPage(1, false); // go to page to ensure we ignore clones

            }
            
            return;
        },
        
        // appends and prepends items to provide illusion of continuous scrolling
        _addClonedItems: function () {

            if (this.options.disabled) {
                this._removeClonedItems();
                return;
            }
        
            var elems = this.elements,
                cloneCount = this._getCloneCount(),
                cloneClass = this.widgetBaseClass + '-item-clone';

            this._removeClonedItems();
        
            elems.clonedBeginning = this.elements.items
                .slice(0, cloneCount)
                    .clone()
                        .addClass(cloneClass);

            elems.clonedEnd = this.elements.items
                .slice(-cloneCount)
                    .clone()
                        .addClass(cloneClass);
            
            elems.clonedBeginning.appendTo(elems.runner);
            elems.clonedEnd.prependTo(elems.runner);
            
            return;
        },

        _removeClonedItems: function () {
        
            var elems = this.elements;
        
            if (elems.clonedBeginning) {
                elems.clonedBeginning.remove();
                elems.clonedBeginning = undefined;
            }
            
            if (elems.clonedEnd) {
                elems.clonedEnd.remove();
                elems.clonedEnd = undefined;
            }
        
        },

        // number of cloned items should equal itemsPerPage or, if greater, itemsPerTransition
        _getCloneCount: function () {

            var visibleItems = Math.ceil(this._getMaskDim() / this._getItemDim()),
                itemsPerTransition = this.getItemsPerTransition();

            return visibleItems >= itemsPerTransition ? visibleItems : itemsPerTransition;
        },

        // needs to be overridden to take into account cloned items
        _setRunnerWidth: function () {

            if (!this.isHorizontal) {
                return;
            }

            var self = this;
            
            if (this.options.continuous) {
                
                this.elements.runner.width(function () {
                    return self._getItemDim() * (self.getNoOfItems() + (self._getCloneCount() * 2));
                });

            }
            else {
                _super._setRunnerWidth.apply(this, arguments);
            }

            return;
        },

        _slide: function (animate) {

            var self = this,
                itemIndex,
                cloneIndex;

            // if first or last page jump to cloned before slide
            if (this.options.continuous) {

                // this criteria means using goToPage(1) when on last page will act as continuous,
                // good thing is it means autoScrolls _start method doesn't have to be overridden
                // anymore, but is it desired?
                if (this.page === 1 && this.prevPage === this.getNoOfPages()) {

                    // jump to clonedEnd
                    this.elements.runner.css(this.helperStr.pos, function () {

                        // get item index of old page in context of clonedEnd
                        itemIndex = self.pages[self.prevPage - 1];

                        cloneIndex = self.elements.items
                            .slice(-self._getCloneCount())
                            .index(self.elements.items.eq(itemIndex - 1));

                        return -self.elements.clonedEnd
                            .eq(cloneIndex)
                                .position()[self.helperStr.pos];
                    });

                }
                else if (this.page === this.getNoOfPages() && this.prevPage === 1) {

                    // jump to clonedBeginning
                    this.elements.runner.css(this.helperStr.pos, function () {
                        return -self.elements.clonedBeginning
                            .first()
                                .position()[self.helperStr.pos];
                    });
                                                
                }

            }

            // continue
            _super._slide.apply(this, arguments);

            return;
        },

        // don't need to take into account itemsPerPage when continuous as there's no absolute last pos
        getNoOfPages: function () {
            
            var itemsPerTransition;

            if (this.options.continuous) {

                itemsPerTransition = this.getItemsPerTransition();

                if (itemsPerTransition <= 0) {
                    return 0;
                }

                return Math.ceil(this.getNoOfItems() / itemsPerTransition);
            }

            return _super.getNoOfPages.apply(this, arguments);
        },

        // not required as cloned items fill space
        _getAbsoluteLastPos: function () {
            
            if (this.options.continuous) {
                return;
            }

            return _super._getAbsoluteLastPos.apply(this, arguments);
        },

        refresh: function() {

            _super.refresh.apply(this, arguments);
            
            if (this.options.continuous) {
                this._addClonedItems();
                this.goToPage(this.page, false);
            }
            
            return;
        },

        // override to avoid clones
        _recacheItems: function () {

            var baseClass = '.' + this.widgetBaseClass;

            this.elements.items = this.elements.runner
                .children(baseClass + '-item')
                    .not(baseClass + '-item-clone');

            return;
        },

        add: function (items) {

            if (this.elements.items.length) {

                this.elements.items
                    .last()
                        .after(items);

                this.refresh();

                return;
            }
            
            // cloned items won't exist so use add from prototype (appends to runner)
            _super.add.apply(this, arguments);

            return;
        },

        _setOption: function (option, value) {
            
            _super._setOption.apply(this, arguments);
            
            switch (option) {
                
            case 'continuous':

                this._setOption('loop', value);

                if (!value) {
                    this._removeClonedItems();
                }
                
                this.refresh();
                
                break;
            }

            return;
        },
        
        destroy: function() {
            
            this._removeClonedItems();
            
            _super.destroy.apply(this);
            
            return;
        }
        
    });
    
})(jQuery);
/**
 * Isotope v1.5.19
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[j],r=h("transitionDuration"));var s=b.event,t;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",t&&clearTimeout(t),t=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){var c=this,d=function(){c.$allAtoms=c.$allAtoms.not(a),a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){w("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
