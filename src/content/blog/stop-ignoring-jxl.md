---
title: 'JPEG XL is here, stop ignoring it'
description: 'ranting about jxl not getting the attention it deserves, while being superior'
pubDate: 2024-08-08
postImage: 'https://c.pxhere.com/images/6d/97/5d5b859f5fb5e3764deaffea927e-1583399.jpg!d'
postImageAlt: "some kinda weird ocean eye image used in jxl branding, CC0. sorry for the low quality of it, as you can see - the source itself is bad lmao. i'll probably replace it eventually with something of my own"
author: 'nvkomata'
---

# what is JPEG XL (jxl)?

in short, it's an image format... another one? yes! and we need it!

### so what does it do?

as the next-generation, general purpose image compression codec by the JPEG committee, it's great at compressing images, probably the best at it - with **high fidelity lossy compression** and **lossless compression**. additionally, it's designed for images,
it's not a video container like avif or heic, and not a derivative of such either like webp.

also, it's [FOSS and royalty-free](https://github.com/libjxl/libjxl/blob/main/LICENSE)

## but the formats you just mentioned can do the *same thing*, what's special about this one?

for one thing, it can do **progressive decoding**. that means when you see a jxl image, you will see it almost immediately - as it will encode in lower quality first and progressively load in higher quality. also, it can decode predefined key parts of the image in higher quality first.

for example: in a jxl photo of a person, this key part can be their face, which will show in higher quality first than the rest of the image.

here's a 39-second video comparison between JPEG, JPEG-XL and Avif https://www.youtube.com/watch?v=UphN1_7nP8U

and it's very fast!

## ok, what about transparency? or animation?

jxl supports **both** of those!

## i want more colors, more pixels, more.. more!!

well, what if i told you... that there is more?

jxl has **max bit depth of 32** can do **wide gamut color** and **HDR**. in addition, the image dimension limit is so high it may aswell be infinite - about `1,073,741,823 x 1,073,741,823`

## how is it compared to other formats then?

it's undoubtedly the winner in general, great for the web, great for your family photos, anywhere! 

here's a comparison table:

![comparison table](https://jpegxl.info/comparison.webp)

src: https://jpegxl.info/comparison.webp

## but is it actually mature? the encoder isn't even 1.0 yet! jpeg-xl is too new!

software versioning is not directly indicative of how stable it is. you can't rule it out just because it's "not 1.0", that's bullshit

it's too new? oh nooo, so should everyone wait for 10 million years to implement something? and why do you think jpegxl was developed? **to make a completely future proof format, one that is fast, has great compression, supports all the features anyone could need.**

the formats of today may be "good enough" for 99% of people, but what about the 1%? jxl is here. for everyone - including that last 1%.

## why isn't it used more? why don't websites use it?

google! no, literally, it's google's fault. google has bullshitted their way to hinder the web yet again - initially, they implemented support for jxl in chrome, but decided to remove it some releases later.

> behind a flag since M91, removed since M110.  
> *src: https://jpegxl.info*

why did they do that? who fucking knows! <img src="https://akko.wtf/emoji/nepmos/NepXD.png" width="32px"> maybe their shilling for avif and the butthurt webp dev being a crybaby and opposing jxl. 2 months before removing chrome support, [google has put out a biased slop of a comparison between jpeg-xl and avif](https://storage.googleapis.com/avif-comparison/index.html).

while the comparison shows jpeg xl as being slower, this difference would be overshadowed by jxl's progressive decoding and it's much higher (un)limits.

**despite jxl having clear advantages over avif, google seems to think that this video container is the better solution? and then they remove the support for it? when they can coexist either way?** that's pretty fishy.

[additionally, here's a comparison by Cloudinary](https://cloudinary.com/blog/the-case-for-jpeg-xl). while you could say it would also be biased, considering they are jxl contributors, they provide you with more and better information and test data.

all key forks of chromium readd support for it :P

!! additionally, **safari fully supports jxl**.

##### what about firefox?

mozilla takes a bullshit "neutral" approach to the whole situation, *waiting for others to enable support themselves*, despite having it in the nightly version of firefox (albeit under a flag).

you'll find the feature built and enabled in most firefox forks - like waterfox and pale moon (though pale moon is junk and i don't recommend it)

##### what about microsoft edge?

sorry, your browser sucks, it's just another chromium based junk. by another shady company even </3 /hj

##### browser support in general

https://caniuse.com/?search=jxl

##### what about other software?

FFMPEG? yes! ImageMagick? yep. GIMP? yeah, it's supported. Krita? of course! darktable? Adobe suite (except Photoshop for some reason)? paint.net? your favorite image viewer? yeah. they all got it.

[here's a doc from libjxl's repository about software support](https://github.com/libjxl/libjxl/blob/main/doc/software_support.md)

## why containers like avif and heic aren't great

because of what they fundamentally are - video containers. they may support the "latest tech", but in the end, they will compress like a video. usually discarding some quality and being more limited at times. just look at the comparison linked above :3

## my personal experience with using jxl

it's great, it can basically turn my 10mb pngs and jpegs into what would be a 600kb jxl file, **without losing any quality**. i started using it personally, not only to preserve space but also have a better experience viewing images in general.

apart from browsers, you can expect to be able to use this format almost anywhere. if not: libjxl can quickly [encode and decode with a couple of commands](https://github.com/libjxl/libjxl?tab=readme-ov-file#usage)

## how *you* can improve it

make issues and request jxl to be added in software that doesn't have it. when there is an issue, give it a thumbs up and share it. keep asking for it, because it's an important feature. star the [libjxl repo](https://github.com/libjxl/libjxl) or something. use it aswell!

and don't pull conservative or useless arguments like "well uhhh we use something else on the backend and have used it for years!" or "the inferior formats get too much hate!". that's not what this post is about.

## closing thoughts

as a user, as a developer, as an amateur artist and creator i'm pretty irritated. jxl has very clear advantages that not enough people are noticing or considering. and google is a piece of shit.

i decided to write about it on the blog that no one will read, but at least if somebody asks i can just link them here. <img src="https://akko.wtf/emoji/frieren/aurashrug.png" width="32px">
