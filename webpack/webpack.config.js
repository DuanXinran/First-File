const path=require('path');
const HtmlPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
module.exports={
    mode: 'development',
    entry:{
        'index1': './src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'},
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081
    }, 
    module:{
        rules:[
            {
                test:/\.css$/i,
                //use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                },"postcss-loader"]
                })

            },{
                test: /\.(png|jpg|gif)$/i,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test: /\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss$/,
                //use:['style-loader','css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback:"style-loader"
                    
                })
            },{
                test:/\.js$/i,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:["@babel/preset-env"]
                        }
                    }
                ],
                exclude:/node_modules/
            }
            

            
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename:'a.html',

            template:'./src/index1.html'
        }),
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        })
    ]
   
}