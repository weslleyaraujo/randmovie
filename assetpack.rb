# asset pack config
set :root, File.dirname(__FILE__)

register Sinatra::AssetPack

assets {
  serve '/js',	from: 'public/js'
  serve '/css',	from: 'public/css'
  serve '/images',  from: 'public/images'
  serve '/static/cover',	from: 'static/cover'

  js :app, [
    '/js/app/app.js',
    '/js/app/models/*.js',
    '/js/app/collections/*.js',
    '/js/app/views/*.js',
    '/js/main.js'
  ]

  js :vendor, [
    'js/vendor/jquery-1.10.2.min.js',
    'js/plugins.js'
  ]

  css :application, [
    '/css/base/*.css',
    '/css/main.css'
  ]

  js_compression  :jsmin    # :jsmin | :yui | :closure | :uglify
  css_compression :simple   # :simple | :sass | :yui | :sqwish
}

