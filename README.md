# Maupassant
[![Build Status](https://travis-ci.org/tufu9441/maupassant-hexo.svg?branch=master)](https://travis-ci.org/tufu9441/maupassant-hexo)   [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tufu9441/maupassant-hexo/blob/master/LICENSE)
## 新增功能
- 增加 SEO 设置
  - 支持配置文件为全局设置 SEO Title、Description meta
  - 支持文章详情页面根据 “文章标题+SEO Title”设置每个页面的标题
  - 支持文章设置 Description meta

> 大道至简

[Preview](https://www.haomwei.com)｜[中文文档](https://www.haomwei.com/technology/maupassant-hexo.html)

A simple Hexo template with great performance on different devices, ported from a Typecho theme by [Cho](https://github.com/pagecho/maupassant/), forked and modified from [icylogic](https://github.com/icylogic/maupassant-hexo/).

![template preview](http://ooo.0o0.ooo/2015/10/24/562b5be12177e.jpg
 "Maupassant template preview")

## Installation
Install theme and renderers:

```shell
$ git clone https://github.com/tufu9441/maupassant-hexo.git themes/maupassant
$ npm install hexo-renderer-jade@0.3.0 --save
$ npm install hexo-renderer-sass --save
```

Then change your `theme` setting in `_config.yml` to `maupassant`.

## Configuration
Default config:

```YAML
fancybox: true ## If you want to use fancybox please set the value to true.
duoshuo: ## Your duoshuo_shortname, e.g. username
disqus: ## Your disqus_shortname, e.g. username
uyan: ## Your uyan_id, e.g. 1234567
gentie: ## Your gentie_productKey, e.g. fc799538c7ad4cf5a5a0c2877a90cbd7
google_search: true ## Use Google search, true/false.
baidu_search: ## Use Baidu search, true/false.
swiftype: ## Your swiftype_key, e.g. m7b11ZrsT8Me7gzApciT
tinysou: ## Your tinysou_key, e.g. 4ac092ad8d749fdc6293
self_search: ## Use a jQuery-based local search engine, true/false.
google_analytics: ## Your Google Analytics tracking id, e.g. UA-42425684-2
baidu_analytics: ## Your Baidu Analytics tracking id, e.g. 8006843039519956000
show_category_count: false ## If you want to show the count of categories in the sidebar widget please set the value to true.
toc_number: true ## If you want to add list number to toc please set the value to true.
shareto: true ## If you want to use the share button please set the value to true.
busuanzi: true ## If you want to use Busuanzi page views please set the value to true.
widgets_on_small_screens: false ## Set to true to enable widgets on small screens.

menu:
  - page: home
    directory: .
    icon: fa-home
  - page: archive
    directory: archives/
    icon: fa-archive
  - page: about
    directory: about/
    icon: fa-user
  - page: rss
    directory: atom.xml
    icon: fa-rss

widgets: ## Six widgets in sidebar provided: search, category, tag, recent_posts, rencent_comments and links.
  - search
  - category
  - tag
  - recent_posts
  - recent_comments
  - links

links:
  - title: site-name1
    url: http://www.example1.com/
  - title: site-name2
    url: http://www.example2.com/
  - title: site-name3
    url: http://www.example3.com/

timeline:
  - num: 1
    word: 2014/06/12-Start
  - num: 2
    word: 2014/11/29-XXX
  - num: 3
    word: 2015/02/18-DDD
  - num: 4
    word: More

# Static files
js: js
css: css

# Theme version
version: 0.0.0
```
- fancybox - Enable [Fancybox](http://fancyapps.com/fancybox/)
- duoshuo - [Duoshuo](http://duoshuo.com) shortname
- disqus - [Disqus](https://disqus.com) shortname
- uyan - [Uyan](http://www.uyan.cc) id
- gentie - [Gentie](https://gentie.163.com) productKey
- google_search - Default search engine
- baidu_search - Search engine for users in China
- swiftype - [Swiftype Search](https://swiftype.com) key
- tinysou - [Tiny Search](http://tinysou.com) key
- self_search - A jQuery-based [local search engine](http://hahack.com/codes/local-search-engine-for-hexo), with the dependency on the plugin [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search).
- google_analytics - [Google Analytics](https://www.google.com/analytics/) tracking id
- baidu_analytics - [Baidu Analytics](http://tongji.baidu.com) tracking id
- show_category_count - Show the count of categories in the sidebar widget.
- toc_number - Show the list number of toc.
- shareto - Enable share button
- busuanzi - Enable [Busuanzi](http://busuanzi.ibruce.info) page views
- widgets_on_small_screens - Show the widgets at the bottom of small screens.
- menu - Customize your menu of pages here, just follow the format of existied items. Don't forget to create corresponding folders inlcuding `index.md` in `source` folder to ensure the pages will correctly display. [FontAwesome](http://fontawesome.io) icon fonts have been integrated, and you can choose other icons which you like [here](http://fontawesome.io/icons/) and use them according to the instruction.
- widgets - Choose and arrange the widgets in sidebar here.
- links - Edit your blogroll here.
- timeline - Show a timeline of the website by setting `layout: timeline` of a page.
- Static files - Static files directory, for convenience of CDN usage.
- Theme version - For automatic refresh of static files on CDN.

## Features
#### Logo
You can set a **favicon.ico** for your website, please put it into  `source` folder of hexo directory, recommended size: 32px*32px.

You can add a website logo for apple devices, please put an image named **apple-touch-icon.png** into `source` folder of hexo directory, recommended size: 114px*114px.

#### Abstract
You can control the abstract of a post shown at index, by either filling a `description:` item in `front-matter` of the `post.md`, or just inserting a `<!--more-->` before your hidden content.

#### Page
Create folders inlcuding `index.md` in `source` folder to add pages, and add a `layout: page` in `front-matter` of `index.md`. If you need a single column page without sidebar, just set `layout: single-column` instead of `layout: page`.

#### Table of Contents
TOC in a post can be enabled by adding a `toc: true` item in `front-matter`.

#### Comments
Comment feature of each post and page can be enabled (default) and disabled by adding a `comments: true` or a `comments: false` in `front-matter`. This could be useful when you want comment feature for a guestbook page, but don't want comment feature for a about page.

#### Syntax Highlighting
Highlighted code showcase is supported, please set the `highlight` option in `_config.yml` of hexo directory like this:

```YAML
highlight:
  enable: true
  auto_detect: true
  line_number: true
  tab_replace:
```

#### Math Equation
Add
```YAML
mathjax: true
```
in Hexo's `_config.yml`.

In the post which you would like to use math equation, add `mathjax: true` in the `front-matter`. For example:

```YAML
title: Test Math
date: 2016-04-05 14:16:00
categories: math
mathjax: true
---
```
The default math delimiters are `$$...$$` and `\\[...\\]` for displayed mathematics,
and `$...$` and `\\(...\\)` for in-line mathematics.

However, if your post contains dollar signs (`$`), and they appear often in non-mathematical parts, in other words, you want to use `$` as dollar sign not inline math delimiter, please add

```YAML
mathjax2: true
```
in Hexo's `_config.yml` instead of `mathjax: true`. Correspondingly, add `mathjax2: true` to the `front-matter` of the post in which
you would like to use math equation.

See the [example](http://zhongpu.info/2016/05/06/Mathjax%20and%20Hexo/).

#### Languages
Seven languages are available for this theme currently: Simplified Chinese (zh-CN), Traditional Chinese (zh-TW), English (en), French (fr-FR), German (de-DE), Korean (ko) and Spanish (es-ES). Contributions of translating to other languages will be highly appreciated.

## Solutions
- Check whether your Terminal's current directory is in hexo's root directory which contains `source/`, `themes/`, etc.

- If you have any trouble in using this theme, please feel free to open an [issue](https://github.com/tufu9441/maupassant-hexo/issues).

## Browser Support
![Imgur](http://i.imgur.com/iO9L5ty.png)

## Contributing
All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.

## Acknowledgements
Thanks for all the [contributors](https://github.com/tufu9441/maupassant-hexo/graphs/contributors) of this theme.
.
## Maupassant on other platforms:
+ Typecho：https://github.com/pagecho/maupassant/
+ Octopress：https://github.com/pagecho/mewpassant/
+ Farbox：https://github.com/pagecho/Maupassant-farbox/
+ Wordpress：https://github.com/iMuFeng/maupassant/
+ Ghost: https://github.com/LjxPrime/maupassant/
