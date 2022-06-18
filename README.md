# ddd-base

Base classes for DDD and clean architecture in TypeScript.

## What is this?

This repo is a collection of classes I've built while learning about Domain Driven Design and Clean Architecture principles in TypeScript by reading and coding. Different cases may need more or less or adjustments to what's here, but it's a decent foundation based on learning I've been doing.

I've left a couple of classes related to [Prisma](https://prisma.io) and [Fastify](https://www.fastify.io/) in the repo. They may be less useful if you aren't using those libraries/frameworks.

## Where did you come up with all this?

-  Much of this code is based on Khalil Stemmler's [blog](https://khalilstemmler.com) and [GitHub repos](https://github.com/stemmlerjs).

-  [Andre Bazaglia's article](https://bazaglia.com/clean-architecture-with-typescript-ddd-onion/) on clean architecture and DDD with TypeScript provided some alternative approaches.

-  Eric Elliot's functional programming articles on Medium ([useful list](https://gist.github.com/Geoff-Ford/51024380f4426d2bdca633d9217f9bcc)). I find class syntax more comfortable for DDD/CA, but use a lot of composition and functional techniques in the resulting code.

-  Various articles about DDD and clean architecture in general, some not TypeScript/JavaScript oriented. DDD/CA is big in the Java world. I may not like Java, but that doesn't mean I can't read it well enough and learn from the thinking of people in the Java community.

-  The `Result` class started with Stemmler's, but I eventually built my own based Stemmler,, [NeverThrow](https://github.com/supermacro/neverthrow), [ts-results](https://github.com/vultix/ts-results) and [Rust's result](https://doc.rust-lang.org/std/result/), which influenced the latter two. As I started using `Result` (Stemmler's then my own), I realized it's a game changer for error handling.

## Why post this?

I want to make the code available for some folks at work who'll need it. I wrote this on my own time, machine, etc., but don't mind sharing it with them or anyone else who finds it useful.

In the future, I plan to post a project repo that uses these classes, but I've shifted my learning focus to React for reasons, so I'm not ready to post it yet. I'll will get back to the DDD/CA effort eventually, or bring it into my React learning work.
