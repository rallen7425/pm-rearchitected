// Top Voices to Follow: rendered as one full-width card with 4 columns on the Home page
// and the /resources page, above "Curated & opinionated". Finalized in Cowork 2026-09-24.
// Columns 1 and 2 share one group heading; the second column's heading is not shown.

export interface VoiceLink {
  label: string;
  url: string;
}

export interface Voice {
  name: string;
  /** First link is the primary source; the rest follow on the same line, separated by " · ". */
  links: VoiceLink[];
}

export interface VoiceColumn {
  /** Group heading shown at the top of the column. */
  heading: string;
  /** True for a column that continues the previous column's group (heading hidden). */
  continuesPrevious?: boolean;
  voices: Voice[];
}

export const TOP_VOICES: VoiceColumn[] = [
  {
    "heading": "Product Management, Growth & Leadership",
    "voices": [
      {
        "name": "Lenny Rachitsky",
        "links": [
          {
            "label": "Lenny's Newsletter",
            "url": "https://www.lennysnewsletter.com/"
          },
          {
            "label": "Podcast",
            "url": "https://www.lennysnewsletter.com/podcast"
          }
        ]
      },
      {
        "name": "Marty Cagan",
        "links": [
          {
            "label": "SVPG Articles",
            "url": "https://www.svpg.com/articles/"
          }
        ]
      },
      {
        "name": "Teresa Torres",
        "links": [
          {
            "label": "Product Talk",
            "url": "https://www.producttalk.org/"
          },
          {
            "label": "Videos",
            "url": "https://www.youtube.com/c/ProductTalkVideos"
          }
        ]
      },
      {
        "name": "Melissa Perri",
        "links": [
          {
            "label": "Product Thinking",
            "url": "https://productinstitute.kit.com/profile"
          },
          {
            "label": "Product Institute",
            "url": "https://productinstitute.com/"
          }
        ]
      },
      {
        "name": "Shreyas Doshi",
        "links": [
          {
            "label": "Newsletter",
            "url": "https://shreyasdoshi.substack.com/"
          },
          {
            "label": "Essays",
            "url": "https://shreyasdoshi.com/"
          }
        ]
      }
    ]
  },
  {
    "heading": "Product Management, Growth & Leadership",
    "continuesPrevious": true,
    "voices": [
      {
        "name": "Aakash Gupta",
        "links": [
          {
            "label": "Product Growth",
            "url": "https://www.aakashg.com/"
          }
        ]
      },
      {
        "name": "Dan Olsen",
        "links": [
          {
            "label": "Newsletter",
            "url": "https://danolsen.substack.com/"
          },
          {
            "label": "Lean Product Playbook",
            "url": "https://leanproductplaybook.com/"
          }
        ]
      },
      {
        "name": "Paweł Huryn",
        "links": [
          {
            "label": "The Product Compass",
            "url": "https://www.productcompass.pm/"
          }
        ]
      },
      {
        "name": "Mind the Product",
        "links": [
          {
            "label": "Articles, Podcast & Community",
            "url": "https://www.mindtheproduct.com/"
          }
        ]
      },
      {
        "name": "Nikhyl Singhal",
        "links": [
          {
            "label": "The Skip",
            "url": "https://theskip.substack.com/"
          }
        ]
      }
    ]
  },
  {
    "heading": "Design & User Experience",
    "voices": [
      {
        "name": "Julie Zhuo",
        "links": [
          {
            "label": "The Looking Glass",
            "url": "https://lg.substack.com/"
          }
        ]
      },
      {
        "name": "Nielsen Norman Group",
        "links": [
          {
            "label": "UX Research & Guidance",
            "url": "https://www.nngroup.com/articles/"
          }
        ]
      },
      {
        "name": "Vitaly Friedman",
        "links": [
          {
            "label": "Smart Interface Design Patterns",
            "url": "https://smart-interface-design-patterns.com/"
          }
        ]
      },
      {
        "name": "UX Collective",
        "links": [
          {
            "label": "uxdesign.cc",
            "url": "https://uxdesign.cc/"
          }
        ]
      }
    ]
  },
  {
    "heading": "Applied AI for Product Builders",
    "voices": [
      {
        "name": "Claire Vo",
        "links": [
          {
            "label": "How I AI",
            "url": "https://www.youtube.com/@howiaipodcast"
          }
        ]
      },
      {
        "name": "Simon Willison",
        "links": [
          {
            "label": "SimonWillison.net",
            "url": "https://simonwillison.net/"
          },
          {
            "label": "AI Guides",
            "url": "https://simonwillison.net/guides/"
          }
        ]
      },
      {
        "name": "Andrew Ng",
        "links": [
          {
            "label": "DeepLearning.AI",
            "url": "https://www.deeplearning.ai/"
          },
          {
            "label": "The Batch",
            "url": "https://www.deeplearning.ai/the-batch/"
          }
        ]
      },
      {
        "name": "Ed Donner",
        "links": [
          {
            "label": "AI Curriculum",
            "url": "https://edwarddonner.com/curriculum/"
          },
          {
            "label": "Videos",
            "url": "https://www.youtube.com/@Edward.Donner"
          }
        ]
      },
      {
        "name": "Ethan Mollick",
        "links": [
          {
            "label": "One Useful Thing",
            "url": "https://www.oneusefulthing.org/"
          }
        ]
      }
    ]
  }
];
