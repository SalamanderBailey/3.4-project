const content = document.getElementById("content");
const nextOne = document.getElementsByClassName("next-one");
const nextTwo = document.getElementsByClassName("next-two");
const nextThree = document.getElementsByClassName("next-three");
const btn1 = document.getElementsByClassName("next-btn next-one");
const btn2 = document.getElementsByClassName("next-btn next-two");
const btn3 = document.getElementsByClassName("next-btn next-three");
const body = document.getElementsByTagName("BODY")[0];

function addContent(pageNum) {
  content.innerHTML += sectionArray[pageNum];
  var button = document.querySelectorAll(".next-btn");
  button[pageNum].style.display = "none";
}

function main() {
  var cutOffOne = document.getElementById("cut-off-1");
  cutOffOne.style.transition = "all 0.7s ease";
  body.addEventListener('click', function(event) {
    if (event.target == nextOne[0] || event.target == btn1[0]) {
      if (pageCount < 1) {
        addContent(0)
        pageCount = 1;
      }
    }
    if (event.target == nextTwo[0] || event.target == btn2[0]) {
      if (pageCount < 2) {
        if (pageCount == 1) {
          addContent(1)
          var cutOffTwo = document.getElementById("cut-off-2");
        } else {
            addContent(0);
            addContent(1);
          }
      pageCount = 2;
      }
    }
    if (event.target == nextThree[0] || event.target == btn3[0]) {
      if (pageCount < 3) {
        if (pageCount == 2) {
          addContent(2);
          var cutOffThree = document.getElementById("cut-off-3");
        }
        else if (pageCount == 1) {
          addContent(1);
          addContent(2);
        }
        else if (pageCount == 0) {
          for (i=0; i < 3; i++) {
            addContent(i);
          }
        }
        pageCount = 3;
      }
    }
  })
  }
sectionArray = [`      <section class="stage-2">
    <p id='jump-one'>But what are the right functions?<br><br> Better question - what are the right results?<br>
      Using the cake analogy again, what is it that differentiates a cake from a brownie or a biscuit?
      Or similarly, how can we tell that a sponge cake and a cheesecake are both cakes - yet they are completely different in texture, taste, and appearance?<br><br>
      Personally, I think that we take our ability to just look/hear/smell/feel/taste something and immediately classify it, all for granted.
      Listening to music and feeling the emotion it evokes, telling apart faces, reading a poem and deciphering it's meaning,
      or even something as simple as telling apart cats and dogs.
      Every skill, talent, and ability no matter how simple, involves a complex process that we simply breeze through.<br><br>
      So, my hope is that by the end of this section, you will at the least agree with me on two concepts.<br><br>
      Two ideas that might give you a better appreciation for your own talents and abilities. Those two ideas are summed up in this one sentence:</p>
    <h3>Your reality is made up of features and associations</h3>

    <div class="imgArray">
      <div class="img-panel">
          <img src="Images/ringcake.jpg" alt="ring-cake">
          <div class="right-img">
            <img src="Images/cheesecake.jpg" alt="cheesecake">
          </div>
      </div>
      <p>What that sentence means is that we classify the things we encounter in real life, based on the different characteristics of those things.<br>
        The two cakes above look, taste, and feel different. Yet, just by looking at or tasting them - we would still call both a cake.</p>
      <div class="img-panel">
      <img src="Images/brownieOne.jpg" alt="brownie">
      <div class="right-img">
          <img src="Images/brownieTwo.jpg" alt="brownie">
      </div>
    </div>
      <p>These brownies are similar to a cake. Yet we wouldn't call it a cake.<br>
        We can deviate the recipe to make those brownies drier, moister, fluffier - maybe even add some frosting.<br>
        But we still might not necessarily call it a cake. <br><br>Why?
        Well, because the two cakes, look/taste 'cakey', and the two brownies still look/taste like a brownie.</p>
      <div class="img-panel">
      <img src="Images/cookie.jpg" alt="cookie">
        <div class="right-img">
          <img src="Images/biscuit.jpg" alt="biscuit">
        </div>
      </div>
    </div>

    <p>Let's call all those characteristics of a cake, like moisture, fluffiness, and sweetness - features.<br>
      Now, these 2 images above, are NOT very similar to a cake.<br>
      Both of those things are also sweet, so it's clear to us that sweetness doesn't play a huge part in determining what and what isn't a cake.<br><br>
      But, maybe if we changed a feature like 'softness', and made a cake which was very hard - then we would stop calling it a cake
      and call it closer to a biscuit instead. <br><br>In this context which I have made up,
      brownies are not a cake, but they are closer to a cake than a biscuit is - in large part (yet not entirely) because of their softness.
      <br><br>The point here is that some features matter more than others.
      All those features like sweetness, are still all very reminiscent of a cake, and contribute to our definition of a cake -
      but not nearly as much as others.</p>

    <div class="lion"><img src="Images/excellentLion.png" alt="lion"></div>
    <p>Maybe, for something like a lion. A feature like the texture of it's fur, doesn't matter as much as the distinct ring of fur that it has around it's head.
      <br><br>And for that reason, we as humans can recognize cartoon, or even lions drawn by a child,
      as representing the same concept - because the features which are strongly associated with a lion are still there.</p>

    <div class="act-diagram">
      <img src="Images/activationExample1.jpg" alt="activations">
    </div>

    <p><i>In the diagram above: more brightly lit = more associated</i><br><br>
      In a neural network, the network is repeatedly trained to detect these features. We won't look at how this training process really works,
      <br>so in it's simplest form, the network undergoes training by initially just making up random gibberish features for a given input (say an image of a cat),
      and improves on making up these features overtime by being told how it's output deviates from the actual answer.<br><br>
      For now, we will just assume that our neural network has hit a point where it has made up just about the right features.<br><br>
      Neurons or activations (they're the same thing), are the backbone of the network.<br>
      They are numbers which are a rating of how 'present' a feature is in for a particular input.<br>
      Each neuron represents a feature, or even a feature of a feature. <br>These neurons would (in this ideal network) be separated into layers, with the most complex features being last, and most simple first.
      <br><br>Say we've trained our network to classify animals.<br>
      And we input in a cat.</p>
    <div class="cat-img"><img src="Images/lowLevelFeatures.png" alt="cat-ear-features"></div>
    <p>It might have a neuron for the slit-like eyes, the pointy ears and the round face.<br>
      It recognizes all these high level features in one of the last layers, but in order to recognize those features it
      first has to recognize the features of those features, and the features of those features etc.<br><br>
      When we recognize a cat by a feature like it's ears, we recognize that the edges in that particular formation are associated with being in a 'point-like' shape,
      the cat ears feature is associated to some high degree to that lower level shape feature.<br><br>
      In our ideal neural network, it associates lower and lower level features until we reach the individual pixels
      which make up the image of the particular feature.</p>

    <h3>Small features make up big features, which make up bigger ones</h3>

    <a href="#jump-two"><div class="next-btn next-two" id='next-2'>Next section</div></a>

  </section>

  <div id="cut-off-2">
    <h1>Weights & Neurons</h1>
  </div>
`, `      <section class="stage-3">
        <div class="weight-img"><img src="Images/weights.jpg" alt="weights"></div>
        <p id='jump-two'>The lines connecting each neuron are weights.
          They are a number which represent how strongly associated/connected a feature is to a particular neuron.<br><br>
          Now, if a feature is really just a bunch of lower level features associated with it, then the 'presentness' of a feature in the image (how big of a number the neuron is in other words),
          can be determined by how present those lower level features from the previous layers are.</p>

        <div class=math-img><img src="Images/activationMath.jpg" alt="activations"></div>

        <p>And because our neural network has the correct weights/associations for those particular features,
          and therefore those particular lower level features are generally strongly associated with our output.<br>
          Higher weight values multiplied by a higher activation value gives us a higher number for the next feature - and the opposite will happen for the features with low weights (i.e those that don't matter as much).
          <br><br>So, multiplying each activation by it's weight/it's association with a particular neuron (a specific feature),
          gets us our 'rating' for how much the network thinks this feature is present - just based on the associations and the input alone.<br><br>
          But that's not all. The network, at this point has taken an input, based on what it associates with that input.
          However, when we see things in real life, we usually expect some things to be there more than others.<br><br>
          We wouldn't expect to see pork chops on the shelves of a tech store.
          So even, though we may see a pork chop, our brains might deceive us to think it's something else based on the context we're in.<br><br>
          There is a positive/negative 'bias' towards some features and not others. <br><br>You can think of the bias as a threshold that the input must meet in order for the network to start saying 'yup, it's probably that thing'.
          <br><br>Mathematically, this means we add a bias to the sum of our weights & activations, and put it into a thing called an 'activation function' - a function which really just makes the numbers normal and coherent.
          <br><br>This process occurs for every neuron of a layer. Where the associations and activations of the last layer,
          combine to give you the values for the activations in the next. </p>

        <h3>As small features decide big features, activations of previous layers decide the next</h3>

        <a href="#jump-three"><div class="next-btn next-three" id='next-3'>Next Section</div></a>

      </section>

      <div id="cut-off-3">
        <h1>Convolution</h1>
      </div>
`, `    <section class="stage-4">
    <div class="conv-diagram" id='jump-three'>
      <img src="Images/convolution.jpg" alt="filters">
    </div>
    <p>In previous sections, I discussed how the output is really a bunch of associated features,
      which can be broken down into smaller and smaller features until we reach the smallest feature.<br><br>
      In this section, we're going to learn how to put that concept into practice by using 'filters' to get a representation of how well, an input fits a particular feature.<br><br>
      One question you might be asking after the last section is, 'how do we get these weights from an input?' 'How do we associate the lowest level of features with a bigger feature in practice?'<br><br>
      Well, take the diagram above. In that, our aim is to have the neural network recognize handwritten characters from an image. <br><br>Here, our lowest level feature is a pixel, as it's the pixels which make up the lines, which make up the shapes, which make up the bigger features we see on screen - so that's where we start.
      <br><br>Shown in the diagram, each pixel is a feature, and the bigger feature that's made up of those features that we are trying to look for, is a line. <br><br>The 'filter' shown on the right is that bigger feature, and the 'feature map' is the result of the filter being applied to the input image.
      <br><br>The computer creates these feature maps by taking the feature and 'sliding it across the entire image, a couple (or several) pixels at a time and comparing it to the input. <br>It assigns a value for each pixel in the input by multiplying the image pixel brightness values with the filter's. <br>A feature map is created from doing this to the entire image.
      In the diagram above, because we're trying to look for a line in the image, the network ends up heavily associating the pixels/features which are in the place where the line is with our bigger line feature. And similarly, won't associate with the pixels for where the line isn't.
      <br><br>As a result, each pixel on the feature map becomes a weight, with it's brightness corresponding to it's weight. And each pixel on the actual input image becomes an activation.<br><br><br>
      <b>There is much more to neural networks but this is the main gist of it.</b><br><br>
      <i>If you'd like to learn more about deep learning and neural networks check out 3Blue1Brown's videos on neural networks, or Michael Nielsen's deep learning guides.</i><br><br>
      But at the very least I hope you've learnt something useful from this guide!</p>
    </div>
    `]

var pageCount = 0;
main()
