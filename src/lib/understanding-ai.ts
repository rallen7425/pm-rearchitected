import type { ResourceTopic } from "./resources";

// AI for PMs page. Content finalized in Cowork 2026-09-23 (handoff-for-claude-code/ai-for-pms-content.json).
export const UNDERSTANDING_AI: ResourceTopic = {
  "id": "understanding-ai",
  "label": "Understanding AI",
  "width": "standard",
  "tileDescription": "Learn the fundamentals: how AI works, what it can do, and where it falls short.",
  "pageIntro": "The vocabulary and mental models every PM needs before going deeper: how models are trained, how large language models work, how to prompt them, how retrieval grounds them in your own data, and what actually makes something an agent. Start here if the terms still blur together.",
  "subtopics": [
    {
      "id": "ai-foundations",
      "name": "AI Foundations",
      "theme": "How AI, machine learning, deep learning, and generative AI relate, and how models learn in the first place.",
      "note": "How AI, machine learning, deep learning, and generative AI relate, and how models learn in the first place.",
      "resources": [
        {
          "type": "article",
          "title": "IBM — What Are Large Language Models (LLMs)?",
          "summary": "The quickest way to get the vocabulary down: tokens, training, parameters, and context windows. A clean reference to come back to when a term comes up in a meeting.",
          "url": "https://www.ibm.com/think/topics/large-language-models"
        },
        {
          "type": "article",
          "title": "Nielsen Norman Group — How AI Models Are Trained",
          "summary": "A plain-English walk through pretraining, fine-tuning, and reinforcement learning. Written by a UX research firm, so it stays focused on what matters to people building products.",
          "url": "https://www.nngroup.com/articles/ai-model-training/"
        },
        {
          "type": "article",
          "title": "Google — Machine Learning Crash Course",
          "summary": "Google's free, self-paced introduction to machine learning with interactive exercises. More than most PMs need, but the first few modules make terms like training, loss, and overfitting concrete.",
          "url": "https://developers.google.com/machine-learning/crash-course"
        },
        {
          "type": "article",
          "title": "University of Helsinki — Elements of AI",
          "summary": "A free course built for non-technical learners: what AI is, what it can and can't do, and how it affects work and society. A gentle, structured starting point.",
          "url": "https://www.elementsofai.com/"
        },
        {
          "type": "video",
          "title": "Harper Carroll AI — AI vs. Machine Learning vs. Deep Learning vs. Generative & Agentic AI",
          "summary": "Sorts out the nested terms in one pass, ending with where agentic AI fits.",
          "url": "https://www.youtube.com/watch?v=xvpeMdAs9pE"
        },
        {
          "type": "video",
          "title": "3Blue1Brown — But What Is a Neural Network?",
          "summary": "The classic visual introduction to how a neural network learns. The best 20 minutes you can spend on the fundamentals.",
          "url": "https://www.youtube.com/watch?v=aircAruvnKk"
        },
        {
          "type": "video",
          "title": "Computer History Museum — Large Language Models, Explained Briefly",
          "summary": "Grant Sanderson of 3Blue1Brown gives a short, visual overview of how LLMs are built and trained.",
          "url": "https://www.youtube.com/watch?v=WMcwoIyK4DA"
        },
        {
          "type": "video",
          "title": "Andrej Karpathy — Intro to Large Language Models",
          "summary": "Karpathy's one-hour talk for a general audience: what an LLM is, how it's trained, and where it's heading.",
          "url": "https://www.youtube.com/watch?v=zjkBMFhNj_g"
        }
      ]
    },
    {
      "id": "how-llms-work",
      "name": "How LLMs Work",
      "theme": "Tokens, transformers, context windows, and why models sometimes make things up.",
      "note": "Tokens, transformers, context windows, and why models sometimes make things up.",
      "resources": [
        {
          "type": "article",
          "title": "Stephen Wolfram — What Is ChatGPT Doing and Why Does It Work?",
          "summary": "The clearest first-principles account of what's happening inside a language model as it picks the next word. Long, but it rewards a patient read.",
          "url": "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/"
        },
        {
          "type": "article",
          "title": "Anthropic — Context Windows",
          "summary": "The official explanation of what a context window is and why it's the single biggest practical constraint on what a model can do in one conversation.",
          "url": "https://docs.claude.com/en/docs/build-with-claude/context-windows"
        },
        {
          "type": "article",
          "title": "OpenAI — Why Language Models Hallucinate",
          "summary": "OpenAI's own research explanation for why models confidently make things up: training and evaluation reward a good guess over admitting uncertainty. Essential context for any PM shipping an AI feature.",
          "url": "https://openai.com/index/why-language-models-hallucinate/"
        },
        {
          "type": "article",
          "title": "Netflix Technology Blog — In-House LLM Serving at Netflix",
          "summary": "How Netflix runs models inside its own infrastructure rather than calling an external API. More technical than the rest of this page, but a good look at what \"running a model\" means at scale.",
          "url": "https://netflixtechblog.com/in-house-llm-serving-at-netflix-a5a8e799ea2c"
        },
        {
          "type": "video",
          "title": "3Blue1Brown — Transformers, the Tech Behind LLMs",
          "summary": "The best visual explanation of what happens inside a model as it predicts the next word.",
          "url": "https://www.youtube.com/watch?v=wjZofJX0v4M"
        },
        {
          "type": "video",
          "title": "Andrej Karpathy — Deep Dive into LLMs like ChatGPT",
          "summary": "A three-and-a-half-hour, no-slides walkthrough of how these models are built, from someone who has trained them.",
          "url": "https://www.youtube.com/watch?v=7xTGNNLPyMI"
        },
        {
          "type": "video",
          "title": "Leon Petrou — Transformers, Explained",
          "summary": "A shorter, beginner-friendly take on the transformer architecture behind ChatGPT.",
          "url": "https://www.youtube.com/watch?v=Pnd8bCJ4Z3A"
        },
        {
          "type": "video",
          "title": "The Data and AI Guy — Why LLMs Hallucinate (and How to Actually Reduce It)",
          "summary": "Why hallucinations happen and the practical techniques teams use to reduce them.",
          "url": "https://www.youtube.com/watch?v=wU5NsIsX_qI"
        }
      ]
    },
    {
      "id": "prompting-context-engineering",
      "name": "Prompting & Context Engineering",
      "theme": "How to instruct a model well, and why the context you give it matters more than clever wording.",
      "note": "How to instruct a model well, and why the context you give it matters more than clever wording.",
      "resources": [
        {
          "type": "article",
          "title": "Anthropic — Prompt Engineering Overview",
          "summary": "Anthropic's guide to the techniques that consistently work: be clear and direct, give examples, let the model think, and structure inputs. The best single starting point.",
          "url": "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview"
        },
        {
          "type": "article",
          "title": "Anthropic — Prompt Engineering Interactive Tutorial",
          "summary": "A free, hands-on course of exercises that teaches prompting by doing. Worth an afternoon if you write prompts for a product feature.",
          "url": "https://github.com/anthropics/prompt-eng-interactive-tutorial"
        },
        {
          "type": "article",
          "title": "Anthropic — Effective Context Engineering for AI Agents",
          "summary": "Why the discipline has shifted from writing the perfect prompt to curating everything the model sees: instructions, tools, history, and retrieved data. The mental model behind most modern AI products.",
          "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
        },
        {
          "type": "article",
          "title": "OpenAI — Prompt Engineering Guide",
          "summary": "OpenAI's companion guide, useful for seeing which techniques hold across model providers and which are specific to one.",
          "url": "https://platform.openai.com/docs/guides/prompt-engineering"
        },
        {
          "type": "video",
          "title": "Anthropic — Prompting 101 | Code w/ Claude",
          "summary": "Anthropic's team builds a real prompt step by step, explaining each choice.",
          "url": "https://www.youtube.com/watch?v=ysPbXH0LpIE"
        },
        {
          "type": "video",
          "title": "Anthropic — AI Prompt Engineering: A Deep Dive",
          "summary": "A roundtable of Anthropic prompt engineers on what good prompting looks like and where it's heading.",
          "url": "https://www.youtube.com/watch?v=T9aRN5JkmL8"
        },
        {
          "type": "video",
          "title": "IBM Technology — Context Engineering vs. Prompt Engineering",
          "summary": "A whiteboard explanation of how context engineering, RAG, and agents extend basic prompting.",
          "url": "https://www.youtube.com/watch?v=vD0E3EUb8-8"
        },
        {
          "type": "video",
          "title": "Standarity — Effective Context Engineering for AI Agents",
          "summary": "Anthropic's context engineering article, read and highlighted, for people who prefer to listen.",
          "url": "https://www.youtube.com/watch?v=grs8yPUJ8j0"
        }
      ]
    },
    {
      "id": "rag-embeddings-vector-search",
      "name": "RAG, Embeddings & Vector Search",
      "theme": "How teams ground a model's answers in their own data instead of relying only on what it learned in training.",
      "note": "How teams ground a model's answers in their own data instead of relying only on what it learned in training.",
      "resources": [
        {
          "type": "article",
          "title": "IBM — What Is Retrieval-Augmented Generation (RAG)?",
          "summary": "How RAG works: retrieve relevant documents first, then have the model answer using them. The pattern behind most enterprise chatbots and knowledge assistants.",
          "url": "https://www.ibm.com/think/topics/retrieval-augmented-generation"
        },
        {
          "type": "article",
          "title": "Pinecone — What Is a Vector Database?",
          "summary": "Explains embeddings and vector search, the technology that lets RAG find text by meaning rather than keyword. Written by a vendor, but one of the clearest explainers available.",
          "url": "https://www.pinecone.io/learn/vector-database/"
        },
        {
          "type": "article",
          "title": "Anthropic — Contextual Retrieval",
          "summary": "Why basic RAG often misses the right passage, and a practical technique for fixing it. A good look at the gap between a RAG demo and a RAG product.",
          "url": "https://www.anthropic.com/news/contextual-retrieval"
        },
        {
          "type": "video",
          "title": "IBM Technology — What Is Retrieval-Augmented Generation (RAG)?",
          "summary": "The short whiteboard explainer that made RAG click for a lot of people.",
          "url": "https://www.youtube.com/watch?v=T-D1OfcDW1M"
        },
        {
          "type": "video",
          "title": "IBM Technology — RAG Explained",
          "summary": "A second pass on RAG covering the full pipeline from documents to answers.",
          "url": "https://www.youtube.com/watch?v=qppV3n3YlF8"
        },
        {
          "type": "video",
          "title": "Computerphile — Vector Search with LLMs",
          "summary": "How embeddings turn text into numbers you can search by meaning.",
          "url": "https://www.youtube.com/watch?v=YDdKiQNw80c"
        },
        {
          "type": "video",
          "title": "IBM Technology — RAG's Evolution: From Simple Retrieval to Agentic AI",
          "summary": "How RAG is shifting from a fixed pipeline to agents that decide what to look up.",
          "url": "https://www.youtube.com/watch?v=JB2P5Gk23VI"
        }
      ]
    },
    {
      "id": "ai-agents-mcp",
      "name": "AI Agents & MCP",
      "theme": "What an agent is, and how the Model Context Protocol connects models to tools and data. The AI Product Building Blocks page goes deeper on building them.",
      "note": "What an agent is, and how the Model Context Protocol connects models to tools and data. The AI Product Building Blocks page goes deeper on building them.",
      "resources": [
        {
          "type": "article",
          "title": "Simon Willison — \"Agent\" May Finally Have a Useful Definition",
          "summary": "Willison tracks how the industry converged on a working definition of an agent: an LLM running tools in a loop to achieve a goal. The simplest way to cut through the hype.",
          "url": "https://simonw.substack.com/p/i-think-agent-may-finally-have-a"
        },
        {
          "type": "article",
          "title": "IBM — What Are AI Agents?",
          "summary": "A structured overview of agent types, components, and use cases. Useful for mapping the vocabulary vendors use onto the simple definition above.",
          "url": "https://www.ibm.com/think/topics/ai-agents"
        },
        {
          "type": "article",
          "title": "Anthropic — Introducing the Model Context Protocol",
          "summary": "The announcement of MCP, the open standard for connecting AI models to tools and data. It's since become the default way products expose capabilities to agents.",
          "url": "https://www.anthropic.com/news/model-context-protocol"
        },
        {
          "type": "article",
          "title": "Model Context Protocol — Documentation",
          "summary": "The official MCP site, with a short introduction to how clients and servers fit together. Worth reading the overview even if you never build a server.",
          "url": "https://modelcontextprotocol.io/"
        },
        {
          "type": "video",
          "title": "IBM Technology — What Are AI Agents?",
          "summary": "A clear explanation of how agents reason, act, and use tools.",
          "url": "https://www.youtube.com/watch?v=F8NKVhkZZWI"
        },
        {
          "type": "video",
          "title": "Anthropic — Tips for Building AI Agents",
          "summary": "Anthropic's team on when to use an agent, when not to, and what they've learned building them.",
          "url": "https://www.youtube.com/watch?v=LP5OCa20Zpg"
        },
        {
          "type": "video",
          "title": "IBM Technology — What Is MCP?",
          "summary": "How MCP lets agents connect to databases and APIs through one standard.",
          "url": "https://www.youtube.com/watch?v=eur8dUO9mvE"
        },
        {
          "type": "video",
          "title": "Anthropic — The Model Context Protocol (MCP)",
          "summary": "The team behind MCP explains why they built it and how it works.",
          "url": "https://www.youtube.com/watch?v=CQywdSdi5iA"
        }
      ]
    }
  ]
};
