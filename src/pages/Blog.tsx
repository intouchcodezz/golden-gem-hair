import React, { useState, useEffect, useRef } from 'react';
import { Calendar, User, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

import blogs1 from '../assets/blogs1.png'

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  image: string;
  content: string;
}

export default function Blog() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const observerTarget = useRef<HTMLDivElement>(null);

  const blogs: BlogPost[] = [
    {
      id: 11,
      title: 'Hair Transplant Solutions You Can Trust in Chennai',
      author: 'The Golden Gem Cosmetic Clinic',
      date: 'September 2025',
      readTime: '5 min read',
      category: 'Hair Transplant',
      summary: 'Choosing a reliable hair transplant clinic in Chennai can make a huge difference in achieving natural and long-lasting results.',
      image: blogs1,
      content: `
        <div class="space-y-6">
          <p>Hair Transplant Solutions You Can Trust in Chennai</p>

          <p>
            Hair loss can affect confidence, appearance, and overall self-esteem. If you’re experiencing thinning hair or bald patches, choosing the right clinic is the first and most important step. Finding a reliable hair transplant clinic Chennai residents trust can make a huge difference in achieving natural and long-lasting results. With modern techniques and experienced specialists, hair restoration today is safer, effective, and more comfortable than ever before.
          </p>

          <p>
            Why Choose a Professional Hair Transplant Clinic in Chennai?
            Chennai has become a leading destination for advanced cosmetic treatments, including hair restoration. A professional hair transplant Chennai clinic offers access to trained doctors, advanced equipment, and proven techniques such as FUE and FUT. These methods ensure minimal scarring, faster recovery, and natural hair growth.
            Patients benefit from personalized treatment plans, ensuring results that match their facial structure and hair density goals.
          </p>

          <p>
            Looking for a Hair Transplant Clinic Near Me?
            When searching for a hair transplant clinic near me, it’s important to consider factors beyond location. Look for clinics that offer:
          </p>

          <ul class="list-disc pl-6 space-y-2">
            <li>Experienced and certified surgeons</li>
            <li>Advanced hair transplant technology</li>
            <li>Transparent consultation and pricing</li>
            <li>Proven before-and-after results</li>
            <li>Strong patient reviews and testimonials</li>
          </ul>

          <p>
            A nearby clinic also helps with easy follow-ups and post-treatment care, making the recovery process smooth and stress-free.
          </p>

          <p>
            Advanced Hair Transplant Techniques in Chennai
            Modern hair transplant clinics in Chennai use advanced procedures designed for comfort and precision. These techniques focus on:
          </p>

          <ul class="list-disc pl-6 space-y-2">
            <li>Natural hairline design</li>
            <li>High graft survival rate</li>
            <li>Minimal downtime</li>
            <li>Long-lasting and natural-looking results</li>
          </ul>

          <p>
            With proper aftercare and guidance, patients can enjoy permanent hair restoration and improved confidence.
          </p>

          <p>
            Regain Your Confidence with Expert Hair Care
            Hair transplant treatment is not just about restoring hair—it’s about restoring confidence. Choosing the right clinic ensures safe procedures, natural outcomes, and long-term satisfaction. A trusted clinic will guide you through consultation, treatment, and aftercare every step of the way.
          </p>

          <p>
            For expert care, advanced technology, and personalized hair restoration solutions, trust The Golden Gem Cosmetic Clinic.
          </p>
        </div>
      `
    },
    {
      id: 1,
      title: 'Hair Transplant Aftercare: Essential Do\'s and Don\'ts',
      author: 'Dr. A. Sharma',
      date: 'September 10, 2025',
      readTime: '6 min read',
      category: 'Hair Restoration',
      summary: 'Essential aftercare steps to maximize graft survival and healing post hair transplant surgery.',
      image: 'https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Proper aftercare following a hair transplant is critical to ensure optimal graft survival and achieve the best possible results. The first 48-72 hours are particularly crucial for the newly transplanted follicles.</p>

          <div class="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">Immediate 48-72 Hours</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-amber-600 mr-3 mt-1">•</span><span>Avoid touching or scratching the grafts under any circumstances</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3 mt-1">•</span><span>Sleep with your head elevated at 45 degrees to reduce swelling</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3 mt-1">•</span><span>Apply cold compresses to the forehead (not directly on grafts)</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3 mt-1">•</span><span>Take prescribed medications on schedule</span></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Hygiene & Washing Protocol</h3>
            <p class="mb-4">Use only the recommended mild, pH-balanced shampoo. The first wash is typically done at the clinic 24-48 hours post-surgery. After that:</p>
            <ol class="space-y-3 ml-6">
              <li class="text-gray-700"><strong>Days 3-10:</strong> Gentle washing with a cup method (pour water gently, don't spray directly)</li>
              <li class="text-gray-700"><strong>Days 10-14:</strong> Very gentle shampooing with fingertips (no scratching)</li>
              <li class="text-gray-700"><strong>After 2 weeks:</strong> Normal washing can resume, but still be gentle</li>
            </ol>
          </div>

          <div class="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-red-900 mb-3">Critical Don'ts</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-red-600 mr-3 mt-1">✗</span><span>No alcohol or smoking for at least 2 weeks (affects blood flow)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 mt-1">✗</span><span>Avoid direct sun exposure for 4-6 weeks (wear a loose hat after week 1)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 mt-1">✗</span><span>No swimming pools or saunas for 4 weeks</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 mt-1">✗</span><span>No heavy exercise or activities causing sweating for 2 weeks</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 mt-1">✗</span><span>Do not use strong hair products, dyes, or styling tools for 4 weeks</span></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Expected Timeline</h3>
            <div class="space-y-3">
              <div class="border-l-4 border-gray-300 pl-4">
                <p class="font-semibold text-gray-900">Week 1-2: Healing Phase</p>
                <p class="text-gray-600">Scabbing, redness, and minor swelling are normal</p>
              </div>
              <div class="border-l-4 border-gray-300 pl-4">
                <p class="font-semibold text-gray-900">Week 2-4: Shock Loss</p>
                <p class="text-gray-600">Transplanted hair may shed (this is normal and expected)</p>
              </div>
              <div class="border-l-4 border-gray-300 pl-4">
                <p class="font-semibold text-gray-900">Month 3-6: New Growth</p>
                <p class="text-gray-600">New hair begins growing from transplanted follicles</p>
              </div>
              <div class="border-l-4 border-gray-300 pl-4">
                <p class="font-semibold text-gray-900">Month 12-18: Final Results</p>
                <p class="text-gray-600">Full density and maturation of transplanted hair</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'PRP Therapy for Hair Growth: Complete Guide',
      author: 'Dr. Mehta',
      date: 'August 21, 2025',
      readTime: '8 min read',
      category: 'Treatment Options',
      summary: 'A comprehensive guide to platelet-rich plasma therapy for hair growth, including what to expect and treatment protocols.',
      image: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Platelet-Rich Plasma (PRP) therapy has emerged as a promising non-surgical treatment for hair loss. This innovative procedure uses your body's own healing factors to stimulate dormant hair follicles and promote hair growth.</p>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">How PRP Works</h3>
            <p class="mb-4">PRP contains concentrated platelets rich in growth factors that:</p>
            <ul class="space-y-2 ml-6">
              <li class="text-gray-700 flex items-start"><span class="text-amber-600 mr-3 mt-1">→</span><span>Stimulate inactive or newly implanted hair follicles into active growth phase</span></li>
              <li class="text-gray-700 flex items-start"><span class="text-amber-600 mr-3 mt-1">→</span><span>Increase blood supply to the hair follicle</span></li>
              <li class="text-gray-700 flex items-start"><span class="text-amber-600 mr-3 mt-1">→</span><span>Increase hair shaft size (thickness)</span></li>
              <li class="text-gray-700 flex items-start"><span class="text-amber-600 mr-3 mt-1">→</span><span>Trigger and maintain the growth phase of the hair cycle</span></li>
            </ul>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-3">The Procedure</h3>
            <ol class="space-y-3">
              <li class="text-gray-700"><strong>Step 1:</strong> Blood draw (similar to routine blood test) - approximately 20-60ml</li>
              <li class="text-gray-700"><strong>Step 2:</strong> Centrifugation to separate and concentrate platelets</li>
              <li class="text-gray-700"><strong>Step 3:</strong> Injection of PRP into the scalp at multiple points</li>
              <li class="text-gray-700"><strong>Duration:</strong> Total procedure takes 45-60 minutes</li>
            </ol>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Treatment Protocol</h3>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="font-semibold text-gray-900 mb-3">Initial Phase:</p>
              <p class="text-gray-700 mb-4">3-4 sessions spaced 4-6 weeks apart</p>

              <p class="font-semibold text-gray-900 mb-3">Maintenance Phase:</p>
              <p class="text-gray-700">Single session every 4-6 months to maintain results</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Expected Results</h3>
            <ul class="space-y-3">
              <li class="border-l-4 border-amber-600 pl-4">
                <p class="font-semibold text-gray-900">2-3 Months</p>
                <p class="text-gray-600">Reduced hair shedding, improved hair texture</p>
              </li>
              <li class="border-l-4 border-amber-600 pl-4">
                <p class="font-semibold text-gray-900">4-6 Months</p>
                <p class="text-gray-600">Visible increase in hair density and thickness</p>
              </li>
              <li class="border-l-4 border-amber-600 pl-4">
                <p class="font-semibold text-gray-900">6-12 Months</p>
                <p class="text-gray-600">Optimal results with continued improvement</p>
              </li>
            </ul>
          </div>

          <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-green-900 mb-3">Side Effects</h3>
            <p class="mb-3">PRP is generally safe with minimal side effects, as it uses your own blood. Common temporary effects include:</p>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span>Mild pain or discomfort at injection sites (resolves within hours)</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span>Minor swelling or redness (subsides within 24-48 hours)</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span>Temporary sensitivity (lasts 1-2 days)</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span>Small bruising at injection sites (rare, resolves in 3-5 days)</span></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Best Candidates for PRP</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-900 mb-2">Ideal For:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Early-stage hair loss</li>
                  <li>• Pattern baldness (male/female)</li>
                  <li>• Post-transplant enhancement</li>
                  <li>• Alopecia areata</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-900 mb-2">Not Suitable For:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Complete baldness</li>
                  <li>• Blood disorders</li>
                  <li>• Active scalp infections</li>
                  <li>• Certain chronic conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: '5 Myths About Hair Loss — Debunked by Science',
      author: 'Dr. Kapoor',
      date: 'July 30, 2025',
      readTime: '5 min read',
      category: 'Education',
      summary: 'Separating facts from fiction so patients can make better decisions about their hair health.',
      image: 'https://images.pexels.com/photos/1159334/pexels-photo-1159334.jpeg',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Hair loss is surrounded by countless myths and misconceptions that can lead to ineffective treatments and unnecessary worry. Let's examine the science behind common hair loss beliefs.</p>

          <div class="space-y-8">
            <div class="border-l-4 border-red-600 pl-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Myth #1: Shampooing Causes Hair Loss</h3>
              <div class="bg-green-50 p-4 rounded-lg mb-3">
                <p class="font-semibold text-green-900 mb-2">The Truth:</p>
                <p class="text-gray-700">Shampooing does not cause hair loss. The hairs you see in the shower are already in the shedding phase (telogen). Gentle washing actually helps maintain a healthy scalp environment. It's normal to lose 50-100 hairs per day regardless of washing frequency.</p>
              </div>
              <p class="text-gray-600 italic">Scientific Basis: Hair loss is determined by genetics and hormones, not external cleansing.</p>
            </div>

            <div class="border-l-4 border-red-600 pl-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Myth #2: Only Older People Experience Hair Loss</h3>
              <div class="bg-green-50 p-4 rounded-lg mb-3">
                <p class="font-semibold text-green-900 mb-2">The Truth:</p>
                <p class="text-gray-700">Hair loss can begin as early as the late teens or early twenties. Male pattern baldness affects approximately 25% of men before age 21, and 66% by age 35. Female pattern hair loss can also begin in the 20s and 30s.</p>
              </div>
              <p class="text-gray-600 italic">Scientific Basis: Androgenetic alopecia is genetically determined and can manifest at any age post-puberty.</p>
            </div>

            <div class="border-l-4 border-red-600 pl-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Myth #3: Wearing Hats Causes Baldness</h3>
              <div class="bg-green-50 p-4 rounded-lg mb-3">
                <p class="font-semibold text-green-900 mb-2">The Truth:</p>
                <p class="text-gray-700">Unless a hat is so tight it causes traction on hair follicles, wearing hats does not cause hair loss. Hair follicles receive oxygen from the bloodstream, not from the air. In fact, hats can protect your scalp from harmful UV radiation.</p>
              </div>
              <p class="text-gray-600 italic">Scientific Basis: Hair loss is caused by internal factors (hormones, genetics, health) not external pressure from headwear.</p>
            </div>

            <div class="border-l-4 border-red-600 pl-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Myth #4: Hair Loss Comes from the Mother's Side Only</h3>
              <div class="bg-green-50 p-4 rounded-lg mb-3">
                <p class="font-semibold text-green-900 mb-2">The Truth:</p>
                <p class="text-gray-700">While the primary baldness gene is on the X chromosome (inherited from mother), hair loss is polygenic, meaning multiple genes from both parents contribute. You can inherit hair loss patterns from either or both sides of your family.</p>
              </div>
              <p class="text-gray-600 italic">Scientific Basis: Research has identified over 200 genetic markers associated with hair loss across multiple chromosomes.</p>
            </div>

            <div class="border-l-4 border-red-600 pl-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Myth #5: There's No Effective Treatment for Hair Loss</h3>
              <div class="bg-green-50 p-4 rounded-lg mb-3">
                <p class="font-semibold text-green-900 mb-2">The Truth:</p>
                <p class="text-gray-700">Multiple FDA-approved treatments exist with proven efficacy: Minoxidil (topical), hair transplant surgery, PRP therapy, and low-level laser therapy. Early intervention yields the best results.</p>
              </div>
              <p class="text-gray-600 italic">Scientific Basis: Clinical studies demonstrate significant hair regrowth and prevention of further loss with proper treatment.</p>
            </div>
          </div>

          <div class="bg-amber-50 border-2 border-amber-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">The Bottom Line</h3>
            <p class="text-gray-700 leading-relaxed">Understanding the science behind hair loss helps you make informed decisions. If you're experiencing hair loss, consult a qualified trichologist or dermatologist for accurate diagnosis and evidence-based treatment options. Early intervention is key to the best outcomes.</p>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: 'Scalp Care: A Routine That Actually Works',
      author: 'Dermatology Team',
      date: 'June 18, 2025',
      readTime: '7 min read',
      category: 'Hair Care',
      summary: 'A simple, science-backed weekly scalp routine to keep the skin healthy and hair strong.',
      image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">A healthy scalp is the foundation for healthy hair. Just as we care for the skin on our face, our scalp requires attention and proper maintenance. Here's a dermatologist-approved routine that delivers results.</p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-3">The Core Principle</h3>
            <p class="text-gray-700 text-lg">Healthy Scalp = Healthy Hair Growth</p>
            <p class="text-gray-600 mt-2">Your scalp has the highest density of hair follicles and sebaceous glands. Proper care optimizes this environment for hair growth while preventing common issues like dandruff, inflammation, and folliculitis.</p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Daily Routine</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 p-5 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Morning</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span><strong>Gentle Massage:</strong> 2-3 minutes using fingertips (not nails) to stimulate blood flow</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span><strong>Scalp Serum:</strong> Apply treatment serum if prescribed (for thinning or specific concerns)</span></li>
                </ul>
              </div>

              <div class="bg-gray-50 p-5 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Evening</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span><strong>Cleanse:</strong> Wash every 2-3 days (or daily if very oily/active lifestyle)</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span><strong>Condition:</strong> Mid-length to ends only, avoid scalp unless very dry</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span><strong>Pat Dry:</strong> Never rub vigorously - gentle patting with microfiber towel</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Weekly Deep Care Protocol</h3>

            <div class="space-y-4">
              <div class="border-l-4 border-amber-600 pl-5">
                <p class="font-semibold text-gray-900 mb-2">Week 1 & 3: Exfoliation</p>
                <p class="text-gray-700 mb-3">Use a gentle scalp exfoliator or salicylic acid treatment to remove buildup, dead skin cells, and unclog follicles.</p>
                <div class="bg-yellow-50 p-3 rounded">
                  <p class="text-sm text-gray-600"><strong>How to:</strong> Apply to damp scalp, massage in circular motions for 3-5 minutes, let sit 2-3 minutes, rinse thoroughly.</p>
                </div>
              </div>

              <div class="border-l-4 border-amber-600 pl-5">
                <p class="font-semibold text-gray-900 mb-2">Week 2 & 4: Deep Hydration Mask</p>
                <p class="text-gray-700 mb-3">Apply a nourishing scalp mask with ingredients like hyaluronic acid, peptides, or natural oils.</p>
                <div class="bg-yellow-50 p-3 rounded">
                  <p class="text-sm text-gray-600"><strong>How to:</strong> Apply to clean, damp scalp. Leave on 15-20 minutes. Rinse with lukewarm water.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Key Ingredients to Look For</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-900 mb-3">For Oily Scalp:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Salicylic acid (exfoliates, controls oil)</li>
                  <li>• Tea tree oil (antimicrobial)</li>
                  <li>• Zinc pyrithione (reduces dandruff)</li>
                  <li>• Clay-based treatments</li>
                </ul>
              </div>

              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-900 mb-3">For Dry Scalp:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Hyaluronic acid (deep hydration)</li>
                  <li>• Ceramides (barrier repair)</li>
                  <li>• Jojoba oil (mimics natural sebum)</li>
                  <li>• Glycerin (moisture retention)</li>
                </ul>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-900 mb-3">For Hair Growth:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Caffeine (stimulates follicles)</li>
                  <li>• Niacinamide (improves circulation)</li>
                  <li>• Peptides (strengthen hair)</li>
                  <li>• Biotin (supports growth)</li>
                </ul>
              </div>

              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-900 mb-3">For Sensitive Scalp:</p>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Aloe vera (soothes irritation)</li>
                  <li>• Chamomile (anti-inflammatory)</li>
                  <li>• Colloidal oatmeal (calms)</li>
                  <li>• Centella asiatica (repairs)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-red-900 mb-3">Common Mistakes to Avoid</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Using hot water (damages scalp barrier and strips natural oils)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Over-washing or under-washing (find your balance)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Scratching with nails (causes micro-tears and inflammation)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Applying conditioner directly to scalp (clogs follicles)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Ignoring scalp health until problems arise</span></li>
            </ul>
          </div>

          <div class="bg-amber-50 border-2 border-amber-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">Pro Tip</h3>
            <p class="text-gray-700">Consistency is more important than intensity. A simple routine done regularly beats an elaborate routine done sporadically. Start with the basics and add treatments as needed for your specific scalp type and concerns.</p>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: 'Nutrition & Hair: Foods That Make a Difference',
      author: 'Nutritionist Priya',
      date: 'May 5, 2025',
      readTime: '6 min read',
      category: 'Nutrition',
      summary: 'Key nutrients and foods to include in your diet for better hair growth and strength.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Your hair is a reflection of your overall health, and nutrition plays a crucial role in hair growth, strength, and appearance. Let's explore the essential nutrients and foods that support healthy hair.</p>

          <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-green-900 mb-3">The Nutrition-Hair Connection</h3>
            <p class="text-gray-700">Hair follicles are among the most metabolically active cells in the body. They require a constant supply of nutrients, particularly protein, vitamins, and minerals. Deficiencies can lead to hair thinning, slow growth, and poor hair quality.</p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Essential Nutrients for Hair Health</h3>

            <div class="space-y-5">
              <div class="bg-blue-50 p-5 rounded-lg">
                <h4 class="font-bold text-blue-900 mb-3 flex items-center">
                  <span class="text-2xl mr-3">1</span>
                  Protein
                </h4>
                <p class="text-gray-700 mb-3">Hair is made of keratin, a protein. Adequate protein intake is essential for hair growth and strength.</p>
                <p class="text-sm font-semibold text-gray-900 mb-2">Best Sources:</p>
                <ul class="text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <li>• Eggs (complete protein)</li>
                  <li>• Greek yogurt</li>
                  <li>• Lean poultry</li>
                  <li>• Fish (salmon, tuna)</li>
                  <li>• Legumes (lentils, beans)</li>
                  <li>• Quinoa (plant-based)</li>
                </ul>
                <p class="text-sm text-amber-700 mt-3 italic">Daily Target: 0.8-1g per kg body weight</p>
              </div>

              <div class="bg-orange-50 p-5 rounded-lg">
                <h4 class="font-bold text-orange-900 mb-3 flex items-center">
                  <span class="text-2xl mr-3">2</span>
                  Iron
                </h4>
                <p class="text-gray-700 mb-3">Iron carries oxygen to hair follicles. Deficiency is a leading cause of hair loss, especially in women.</p>
                <p class="text-sm font-semibold text-gray-900 mb-2">Best Sources:</p>
                <ul class="text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <li>• Red meat (heme iron)</li>
                  <li>• Spinach & leafy greens</li>
                  <li>• Lentils & chickpeas</li>
                  <li>• Pumpkin seeds</li>
                  <li>• Fortified cereals</li>
                  <li>• Oysters</li>
                </ul>
                <p class="text-sm text-amber-700 mt-3 italic">Pro Tip: Pair with vitamin C for better absorption</p>
              </div>

              <div class="bg-purple-50 p-5 rounded-lg">
                <h4 class="font-bold text-purple-900 mb-3 flex items-center">
                  <span class="text-2xl mr-3">3</span>
                  Biotin (Vitamin B7)
                </h4>
                <p class="text-gray-700 mb-3">Essential for keratin production and hair follicle health.</p>
                <p class="text-sm font-semibold text-gray-900 mb-2">Best Sources:</p>
                <ul class="text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <li>• Eggs (especially yolk)</li>
                  <li>• Almonds & walnuts</li>
                  <li>• Sweet potatoes</li>
                  <li>• Mushrooms</li>
                  <li>• Avocados</li>
                  <li>• Bananas</li>
                </ul>
              </div>

              <div class="bg-yellow-50 p-5 rounded-lg">
                <h4 class="font-bold text-yellow-900 mb-3 flex items-center">
                  <span class="text-2xl mr-3">4</span>
                  Vitamin D
                </h4>
                <p class="text-gray-700 mb-3">Plays a role in creating new hair follicles and maintaining growth cycles.</p>
                <p class="text-sm font-semibold text-gray-900 mb-2">Best Sources:</p>
                <ul class="text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <li>• Fatty fish (salmon, mackerel)</li>
                  <li>• Egg yolks</li>
                  <li>• Fortified milk</li>
                  <li>• Mushrooms (UV-exposed)</li>
                  <li>• Sunlight (15-20 min daily)</li>
                  <li>• Cod liver oil</li>
                </ul>
              </div>

              <div class="bg-teal-50 p-5 rounded-lg">
                <h4 class="font-bold text-teal-900 mb-3 flex items-center">
                  <span class="text-2xl mr-3">5</span>
                  Omega-3 Fatty Acids
                </h4>
                <p class="text-gray-700 mb-3">Nourish hair follicles, reduce inflammation, and promote scalp health.</p>
                <p class="text-sm font-semibold text-gray-900 mb-2">Best Sources:</p>
                <ul class="text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <li>• Salmon & sardines</li>
                  <li>• Flaxseeds</li>
                  <li>• Chia seeds</li>
                  <li>• Walnuts</li>
                  <li>• Mackerel</li>
                  <li>• Hemp seeds</li>
                </ul>
              </div>

              <div class="bg-pink-50 p-5 rounded-lg">
                <h4 class="font-bold text-pink-900 mb-3 flex items-center">
                  <span class="text-2xl mr-3">6</span>
                  Zinc
                </h4>
                <p class="text-gray-700 mb-3">Supports hair tissue growth and repair, maintains oil glands around follicles.</p>
                <p class="text-sm font-semibold text-gray-900 mb-2">Best Sources:</p>
                <ul class="text-sm text-gray-700 grid grid-cols-2 gap-2">
                  <li>• Oysters (highest source)</li>
                  <li>• Beef</li>
                  <li>• Pumpkin seeds</li>
                  <li>• Cashews</li>
                  <li>• Chickpeas</li>
                  <li>• Spinach</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Sample Hair-Healthy Meal Plan</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Breakfast</p>
                <p class="text-gray-700">Scrambled eggs with spinach, whole grain toast, and sliced avocado + Orange juice</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Mid-Morning Snack</p>
                <p class="text-gray-700">Greek yogurt with mixed berries and a handful of almonds</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Lunch</p>
                <p class="text-gray-700">Grilled salmon with quinoa and roasted vegetables (broccoli, bell peppers, carrots)</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Afternoon Snack</p>
                <p class="text-gray-700">Carrot sticks with hummus and a small handful of walnuts</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Dinner</p>
                <p class="text-gray-700">Lean chicken breast with sweet potato and leafy green salad (spinach, kale) with pumpkin seeds</p>
              </div>
            </div>
          </div>

          <div class="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">When to Consider Supplements</h3>
            <p class="text-gray-700 mb-3">While food should be your primary source, supplements may help when:</p>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span>You have diagnosed nutritional deficiencies (confirmed by blood test)</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span>Dietary restrictions limit nutrient intake (vegan, allergies)</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span>You have increased needs (pregnancy, medical conditions)</span></li>
            </ul>
            <p class="text-red-700 font-semibold mt-4">⚠️ Always consult your doctor before starting supplements</p>
          </div>
        </div>
      `
    },
    {
      id: 6,
      title: 'Top 3 Non-Surgical Hair Restoration Options',
      author: 'Clinic Insights',
      date: 'April 12, 2025',
      readTime: '7 min read',
      category: 'Treatment Options',
      summary: 'From laser therapy to PRP — options that do not involve surgery and their effectiveness.',
      image: 'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Not everyone is ready for surgical intervention, and not everyone needs it. These three non-surgical options have shown clinical effectiveness for hair restoration and can be used alone or in combination.</p>

          <div class="space-y-8">
            <div class="bg-blue-50 border-2 border-blue-600 rounded-lg overflow-hidden">
              <div class="bg-blue-600 text-white p-4">
                <h3 class="text-2xl font-bold">Option 1: Low-Level Laser Therapy (LLLT)</h3>
              </div>
              <div class="p-6 space-y-4">
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">How It Works</h4>
                  <p class="text-gray-700">LLLT uses red light wavelengths (typically 630-670nm) to stimulate cellular activity in hair follicles. The photons are absorbed by cells, increasing ATP production and improving blood flow to the scalp.</p>
                </div>

                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-3">Treatment Protocol</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start"><span class="text-blue-600 mr-3">•</span><span><strong>Frequency:</strong> 3 times per week (10-30 minutes per session)</span></li>
                    <li class="flex items-start"><span class="text-blue-600 mr-3">•</span><span><strong>Duration:</strong> Minimum 6 months for visible results</span></li>
                    <li class="flex items-start"><span class="text-blue-600 mr-3">•</span><span><strong>Devices:</strong> In-office caps, at-home laser combs/helmets</span></li>
                  </ul>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-bold text-green-900 mb-2">Pros</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>✓ FDA-cleared for safety and efficacy</li>
                      <li>✓ No side effects or downtime</li>
                      <li>✓ Can be done at home</li>
                      <li>✓ Works well with other treatments</li>
                    </ul>
                  </div>
                  <div class="bg-red-50 p-4 rounded-lg">
                    <h4 class="font-bold text-red-900 mb-2">Cons</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>✗ Requires consistent long-term use</li>
                      <li>✗ Results vary by individual</li>
                      <li>✗ Less effective for advanced baldness</li>
                      <li>✗ Initial device cost ($200-$1000)</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-blue-100 p-4 rounded-lg">
                  <p class="font-semibold text-blue-900 mb-2">Best For:</p>
                  <p class="text-gray-700">Early to moderate hair loss, maintaining results after transplant, boosting efficacy of other treatments</p>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 border-2 border-purple-600 rounded-lg overflow-hidden">
              <div class="bg-purple-600 text-white p-4">
                <h3 class="text-2xl font-bold">Option 2: Platelet-Rich Plasma (PRP) Therapy</h3>
              </div>
              <div class="p-6 space-y-4">
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">How It Works</h4>
                  <p class="text-gray-700">Your blood is drawn and processed to concentrate platelets containing growth factors. This PRP is injected into the scalp to stimulate dormant follicles and promote hair growth through natural healing mechanisms.</p>
                </div>

                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-3">Treatment Protocol</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start"><span class="text-purple-600 mr-3">•</span><span><strong>Initial Phase:</strong> 3-4 sessions, 4-6 weeks apart</span></li>
                    <li class="flex items-start"><span class="text-purple-600 mr-3">•</span><span><strong>Maintenance:</strong> 1 session every 4-6 months</span></li>
                    <li class="flex items-start"><span class="text-purple-600 mr-3">•</span><span><strong>Session Duration:</strong> 45-60 minutes per treatment</span></li>
                  </ul>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-bold text-green-900 mb-2">Pros</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>✓ Uses your own blood (no rejection risk)</li>
                      <li>✓ Natural growth factor stimulation</li>
                      <li>✓ Minimal side effects</li>
                      <li>✓ Proven clinical results</li>
                      <li>✓ Can enhance transplant outcomes</li>
                    </ul>
                  </div>
                  <div class="bg-red-50 p-4 rounded-lg">
                    <h4 class="font-bold text-red-900 mb-2">Cons</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>✗ Multiple sessions required</li>
                      <li>✗ Mild discomfort during injections</li>
                      <li>✗ Cost per session ($300-$700)</li>
                      <li>✗ Not covered by insurance</li>
                      <li>✗ Results take 3-6 months</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-purple-100 p-4 rounded-lg">
                  <p class="font-semibold text-purple-900 mb-2">Best For:</p>
                  <p class="text-gray-700">Active hair loss, thinning hair, pattern baldness (early to moderate), post-transplant healing and growth enhancement</p>
                </div>
              </div>
            </div>

            <div class="bg-green-50 border-2 border-green-600 rounded-lg overflow-hidden">
              <div class="bg-green-600 text-white p-4">
                <h3 class="text-2xl font-bold">Option 3: Topical Minoxidil (Rogaine)</h3>
              </div>
              <div class="p-6 space-y-4">
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">How It Works</h4>
                  <p class="text-gray-700">Minoxidil is a vasodilator that increases blood flow to hair follicles, extends the growth phase of hair, and can enlarge miniaturized follicles. It's FDA-approved for both men and women.</p>
                </div>

                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-bold text-gray-900 mb-3">Treatment Protocol</h4>
                  <ul class="space-y-2 text-gray-700">
                    <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span><strong>Application:</strong> Twice daily to dry scalp</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span><strong>Concentration:</strong> 5% for men, 2-5% for women</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span><strong>Results Timeline:</strong> 4-6 months for visible improvement</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-3">•</span><span><strong>Continuous Use:</strong> Must maintain to keep results</span></li>
                  </ul>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h4 class="font-bold text-green-900 mb-2">Pros</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>✓ FDA-approved and clinically proven</li>
                      <li>✓ Available over-the-counter</li>
                      <li>✓ Affordable ($10-$50/month)</li>
                      <li>✓ Easy to use at home</li>
                      <li>✓ Works for many people</li>
                    </ul>
                  </div>
                  <div class="bg-red-50 p-4 rounded-lg">
                    <h4 class="font-bold text-red-900 mb-2">Cons</h4>
                    <ul class="text-sm text-gray-700 space-y-1">
                      <li>✗ Daily commitment required</li>
                      <li>✗ Initial shedding phase (2-8 weeks)</li>
                      <li>✗ Scalp irritation possible</li>
                      <li>✗ Hair loss resumes if stopped</li>
                      <li>✗ Not effective for everyone</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-green-100 p-4 rounded-lg">
                  <p class="font-semibold text-green-900 mb-2">Best For:</p>
                  <p class="text-gray-700">First-line treatment for pattern baldness, crown thinning, maintaining hair density, combining with other treatments</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-amber-50 border-2 border-amber-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-4">Combination Therapy: The Most Effective Approach</h3>
            <p class="text-gray-700 mb-3">Studies show that combining treatments often yields better results than single-treatment approaches:</p>
            <div class="space-y-2 text-gray-700">
              <p class="flex items-start"><span class="text-amber-600 mr-3 font-bold">→</span><span><strong>Minoxidil + LLLT:</strong> Complementary mechanisms for enhanced growth</span></p>
              <p class="flex items-start"><span class="text-amber-600 mr-3 font-bold">→</span><span><strong>PRP + LLLT:</strong> Powerful combination for active hair loss</span></p>
              <p class="flex items-start"><span class="text-amber-600 mr-3 font-bold">→</span><span><strong>All Three:</strong> Comprehensive approach for best outcomes</span></p>
            </div>
            <p class="text-sm text-gray-600 mt-4 italic">Consult with a hair restoration specialist to create a personalized treatment plan based on your specific type and stage of hair loss.</p>
          </div>
        </div>
      `
    },
    {
      id: 7,
      title: 'Preparing for a Hair Transplant: Complete Checklist',
      author: 'Surgical Team',
      date: 'March 2, 2025',
      readTime: '5 min read',
      category: 'Hair Restoration',
      summary: 'Pre-operative steps to ensure smooth surgery and quicker recovery for optimal results.',
      image: 'https://images.pexels.com/photos/3845807/pexels-photo-3845807.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Proper preparation before your hair transplant procedure can significantly impact your surgical experience, recovery time, and final results. Follow this comprehensive checklist to ensure you're ready.</p>

          <div class="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-red-900 mb-3">4 Weeks Before Surgery</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-red-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Stop Smoking</p>
                  <p class="text-sm">Smoking reduces blood flow and impairs healing. Quit at least 4 weeks before (and after) surgery.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Medication Review</p>
                  <p class="text-sm">Inform your surgeon about all medications, supplements, and herbal remedies you're taking.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-red-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Pre-Operative Testing</p>
                  <p class="text-sm">Complete any required blood work or medical clearances.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-orange-900 mb-3">2 Weeks Before Surgery</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-orange-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Stop Blood-Thinning Medications</p>
                  <p class="text-sm">Discontinue aspirin, ibuprofen, vitamin E, fish oil, and other blood thinners (consult your doctor first).</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Avoid Alcohol</p>
                  <p class="text-sm">No alcohol for 2 weeks before and 1 week after surgery to prevent excessive bleeding and complications.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-orange-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Schedule Time Off</p>
                  <p class="text-sm">Arrange 5-7 days off work for recovery (more if your job is physically demanding).</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-yellow-900 mb-3">1 Week Before Surgery</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Arrange Transportation</p>
                  <p class="text-sm">You'll need someone to drive you home after the procedure. Arrange this in advance.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Get a Haircut</p>
                  <p class="text-sm">Trim your hair shorter (but don't shave) to make the procedure easier - your surgeon will advise the ideal length.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Prepare Your Home</p>
                  <p class="text-sm">Set up a comfortable recovery area with extra pillows for elevated sleeping.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Stock Up on Supplies</p>
                  <p class="text-sm">Purchase prescribed medications, mild shampoo, button-up shirts, and easy-to-prepare meals.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-green-900 mb-3">Day Before Surgery</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-green-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Wash Your Hair Thoroughly</p>
                  <p class="text-sm">Use your regular shampoo to ensure your scalp is clean. This is your last wash before surgery.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">No Styling Products</p>
                  <p class="text-sm">Don't apply any gels, sprays, or styling products to your hair.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Get Good Sleep</p>
                  <p class="text-sm">Rest well to ensure you're mentally and physically prepared.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Avoid Heavy Meals</p>
                  <p class="text-sm">Eat light, nutritious meals. Stay well-hydrated.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-3">Day of Surgery</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Eat a Light Breakfast</p>
                  <p class="text-sm">Have a light, nutritious breakfast (unless instructed otherwise). The procedure can be long.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Wear Comfortable Clothing</p>
                  <p class="text-sm">Button-up shirt (so you don't pull clothing over your head post-surgery) and comfortable pants.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Don't Wear Jewelry or Accessories</p>
                  <p class="text-sm">Remove all jewelry, watches, and contact lenses before arrival.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Bring Entertainment</p>
                  <p class="text-sm">Book, tablet, or phone with headphones - procedures can take 4-8 hours.</p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1 font-bold">□</span>
                <div>
                  <p class="font-semibold">Arrive on Time</p>
                  <p class="text-sm">Plan to arrive 15-30 minutes early for final paperwork and preparation.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Shopping List for Recovery</h3>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold text-gray-900 mb-2">Medical Supplies:</p>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Prescribed medications</li>
                    <li>• Mild, pH-balanced shampoo</li>
                    <li>• Ice packs or frozen peas</li>
                    <li>• Sterile gauze (if needed)</li>
                    <li>• Clean towels</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 mb-2">Comfort Items:</p>
                  <ul class="text-sm text-gray-700 space-y-1">
                    <li>• Extra pillows (for elevation)</li>
                    <li>• Button-up shirts (3-4)</li>
                    <li>• Travel neck pillow</li>
                    <li>• Entertainment (books, movies)</li>
                    <li>• Easy-to-prepare meals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 border-2 border-purple-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-900 mb-3">Final Reminders</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-purple-600 mr-3">⚡</span><span>Follow ALL pre-operative instructions from your surgeon - they're customized to your case</span></li>
              <li class="flex items-start"><span class="text-purple-600 mr-3">⚡</span><span>Don't hesitate to call the clinic with questions or concerns before surgery</span></li>
              <li class="flex items-start"><span class="text-purple-600 mr-3">⚡</span><span>Stay positive - proper preparation leads to the best results!</span></li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 8,
      title: 'Understanding Low-Level Laser Therapy: Benefits & Limitations',
      author: 'Tech Team',
      date: 'February 14, 2025',
      readTime: '6 min read',
      category: 'Treatment Options',
      summary: 'Comprehensive guide to laser therapy for hair loss - when it helps and when it does not.',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Low-Level Laser Therapy (LLLT) has gained popularity as a non-invasive treatment for hair loss. Let's explore the science behind it, what it can and cannot do, and who can benefit most.</p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-3">The Science Behind LLLT</h3>
            <p class="text-gray-700 mb-3">LLLT, also called red light therapy or cold laser therapy, uses specific wavelengths of light (typically 630-670 nanometers) to stimulate cellular activity. The proposed mechanisms include:</p>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-blue-600 mr-3">→</span><span><strong>Increased ATP Production:</strong> Photons absorbed by mitochondria boost cellular energy</span></li>
              <li class="flex items-start"><span class="text-blue-600 mr-3">→</span><span><strong>Enhanced Blood Flow:</strong> Improved microcirculation delivers more nutrients to follicles</span></li>
              <li class="flex items-start"><span class="text-blue-600 mr-3">→</span><span><strong>Reduced Inflammation:</strong> Anti-inflammatory effects create a healthier scalp environment</span></li>
              <li class="flex items-start"><span class="text-blue-600 mr-3">→</span><span><strong>Stimulated Cell Proliferation:</strong> Encourages hair follicle cells to enter growth phase</span></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">FDA Clearance Status</h3>
            <div class="bg-green-50 p-5 rounded-lg">
              <p class="text-gray-700 mb-3">LLLT devices have received FDA clearance for treating pattern hair loss (androgenetic alopecia) in both men and women. This clearance indicates the devices are:</p>
              <ul class="space-y-2 text-gray-700 ml-4">
                <li>• Safe for intended use</li>
                <li>• Effective at promoting hair growth and preventing further loss</li>
                <li>• Supported by clinical study data</li>
              </ul>
              <p class="text-sm text-gray-600 mt-3 italic">Note: FDA clearance is different from FDA approval. Clearance means the device is safe and substantially equivalent to already-cleared devices.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Clinical Evidence: What Studies Show</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-green-600 pl-5">
                <p class="font-semibold text-green-900 mb-2">Positive Outcomes</p>
                <ul class="text-gray-700 space-y-2">
                  <li class="flex items-start"><span class="mr-3">•</span><span>26-week study: 37% increase in hair count compared to control group</span></li>
                  <li class="flex items-start"><span class="mr-3">•</span><span>Increased hair shaft diameter (thicker hair)</span></li>
                  <li class="flex items-start"><span class="mr-3">•</span><span>Improved hair tensile strength</span></li>
                  <li class="flex items-start"><span class="mr-3">•</span><span>High patient satisfaction (60-70% report improvement)</span></li>
                </ul>
              </div>

              <div class="border-l-4 border-yellow-600 pl-5">
                <p class="font-semibold text-yellow-900 mb-2">Important Considerations</p>
                <ul class="text-gray-700 space-y-2">
                  <li class="flex items-start"><span class="mr-3">•</span><span>Results are modest - not dramatic transformations</span></li>
                  <li class="flex items-start"><span class="mr-3">•</span><span>Individual response varies significantly</span></li>
                  <li class="flex items-start"><span class="mr-3">•</span><span>Requires consistent, long-term use</span></li>
                  <li class="flex items-start"><span class="mr-3">•</span><span>Benefits plateau after 6-12 months</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">When LLLT Works Best</h3>
            <div class="bg-green-50 p-6 rounded-lg">
              <div class="space-y-4">
                <div>
                  <p class="font-semibold text-green-900 mb-2">✓ Ideal Candidates</p>
                  <ul class="text-gray-700 space-y-1 ml-4">
                    <li>• Early-stage androgenetic alopecia (pattern baldness)</li>
                    <li>• Diffuse thinning across the scalp</li>
                    <li>• Women with female pattern hair loss</li>
                    <li>• People who want to maintain existing hair</li>
                    <li>• Post-transplant patients (accelerates healing, improves outcomes)</li>
                    <li>• Those seeking non-pharmaceutical options</li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold text-green-900 mb-2">✓ Best Results in These Areas</p>
                  <ul class="text-gray-700 space-y-1 ml-4">
                    <li>• Crown (vertex) region</li>
                    <li>• Areas with miniaturized but still-active follicles</li>
                    <li>• Zones with recent hair loss (less than 5 years)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">When LLLT Has Limitations</h3>
            <div class="bg-red-50 p-6 rounded-lg">
              <p class="font-semibold text-red-900 mb-3">✗ Less Effective or Ineffective For:</p>
              <ul class="text-gray-700 space-y-2">
                <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">•</span><span><strong>Complete Baldness:</strong> Cannot revive completely dead follicles or grow hair on smooth, shiny bald areas</span></li>
                <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">•</span><span><strong>Advanced Hair Loss:</strong> Norwood Scale 6-7 in men, Ludwig Scale III in women</span></li>
                <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">•</span><span><strong>Non-Pattern Hair Loss:</strong> Alopecia areata, telogen effluvium, or scarring alopecias</span></li>
                <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">•</span><span><strong>Frontal Hairline Restoration:</strong> Limited impact on receding hairlines</span></li>
                <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">•</span><span><strong>Long-Standing Baldness:</strong> Areas bald for more than 5-10 years</span></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Treatment Devices: Options Available</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-purple-50 p-5 rounded-lg">
                <p class="font-bold text-purple-900 mb-3">In-Office Devices</p>
                <p class="text-sm text-gray-700 mb-2"><strong>Examples:</strong> LaserCap, professional panels</p>
                <p class="text-sm text-gray-700 mb-2"><strong>Treatment:</strong> 20-30 min sessions, 2-3x/week</p>
                <p class="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $50-150 per session</p>
                <p class="text-sm text-green-700 mt-3">Pro: Professional supervision, higher power</p>
                <p class="text-sm text-red-700">Con: Time commitment, ongoing costs</p>
              </div>

              <div class="bg-blue-50 p-5 rounded-lg">
                <p class="font-bold text-blue-900 mb-3">At-Home Devices</p>
                <p class="text-sm text-gray-700 mb-2"><strong>Examples:</strong> HairMax, iRestore, Capillus</p>
                <p class="text-sm text-gray-700 mb-2"><strong>Treatment:</strong> 10-30 min, 3x/week at home</p>
                <p class="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $200-$1,000 one-time purchase</p>
                <p class="text-sm text-green-700 mt-3">Pro: Convenience, privacy, cost-effective long-term</p>
                <p class="text-sm text-red-700">Con: Requires self-discipline, upfront cost</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Realistic Timeline & Expectations</h3>
            <div class="space-y-3">
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <p class="font-semibold text-gray-900">Weeks 1-8: Adjustment Phase</p>
                <p class="text-sm text-gray-600">No visible changes. Some may experience temporary shedding (this is normal).</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p class="font-semibold text-gray-900">Weeks 8-16: Early Changes</p>
                <p class="text-sm text-gray-600">Reduced hair shedding, improved hair texture and shine.</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-green-400">
                <p class="font-semibold text-gray-900">Months 4-6: Visible Improvement</p>
                <p class="text-sm text-gray-600">Increased hair density, thicker hair shafts become noticeable.</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-400">
                <p class="font-semibold text-gray-900">Months 6-12: Peak Results</p>
                <p class="text-sm text-gray-600">Maximum benefits achieved. Continued use maintains results.</p>
              </div>
            </div>
          </div>

          <div class="bg-amber-50 border-2 border-amber-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">The Bottom Line</h3>
            <p class="text-gray-700 mb-4">LLLT is a legitimate, FDA-cleared treatment that can help slow hair loss and modestly improve hair density for people with early to moderate pattern baldness. However, it's not a miracle cure.</p>
            <p class="text-gray-700 font-semibold">Best used as:</p>
            <ul class="text-gray-700 space-y-2 mt-3">
              <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span>Part of a comprehensive treatment plan (combined with minoxidil, or PRP)</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span>A maintenance therapy after hair transplant</span></li>
              <li class="flex items-start"><span class="text-amber-600 mr-3">•</span><span>An option for those who can't or won't use pharmaceutical treatments</span></li>
            </ul>
            <p class="text-sm text-gray-600 mt-4 italic">Consult a hair restoration specialist to determine if LLLT is appropriate for your specific type and stage of hair loss.</p>
          </div>
        </div>
      `
    },
    {
      id: 9,
      title: 'Post-Op Questions: Your Recovery Guide',
      author: 'Patient Care',
      date: 'January 20, 2025',
      readTime: '5 min read',
      category: 'Hair Restoration',
      summary: 'Answers to the most frequently asked questions after hair restoration surgery.',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">After hair transplant surgery, patients often have similar questions and concerns. Here are comprehensive answers to help guide your recovery and set realistic expectations.</p>

          <div class="space-y-6">
            <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-blue-900 mb-3">Q: When will I see results from my hair transplant?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Hair transplant results follow a predictable timeline:</p>
                <div class="ml-4 space-y-2">
                  <p><strong>Week 2-3:</strong> Transplanted hairs will shed (this is normal and expected - called "shock loss")</p>
                  <p><strong>Months 3-4:</strong> New hair begins growing from the transplanted follicles</p>
                  <p><strong>Month 6:</strong> Approximately 50% of final results visible</p>
                  <p><strong>Month 9:</strong> About 75-80% of results apparent</p>
                  <p><strong>Months 12-18:</strong> Full results with maximum density and maturation</p>
                </div>
                <p class="mt-3 text-sm italic bg-white p-3 rounded">Patience is crucial. The follicles are alive and will grow, but hair growth is a slow biological process that cannot be rushed.</p>
              </div>
            </div>

            <div class="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-red-900 mb-3">Q: Is the procedure painful?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Most patients report minimal pain:</p>
                <div class="ml-4 space-y-2">
                  <p><strong>During Surgery:</strong> Local anesthesia keeps the area numb. You'll feel the initial injections (brief pinching sensation), but once numb, you should feel no pain - only pressure or tugging sensations.</p>
                  <p><strong>After Surgery:</strong> Mild to moderate discomfort for 2-3 days, easily managed with prescribed pain medication. Most describe it as a "tight" or "tender" feeling rather than sharp pain.</p>
                  <p><strong>Donor Area:</strong> Typically more uncomfortable than recipient area. Resolves within 3-5 days.</p>
                </div>
                <p class="mt-3 text-sm font-semibold bg-white p-3 rounded">Pain Level: Most patients rate post-op pain as 2-4 out of 10</p>
              </div>
            </div>

            <div class="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-purple-900 mb-3">Q: When can I return to work?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Return-to-work timeline varies by job type:</p>
                <div class="ml-4 space-y-3">
                  <div>
                    <p class="font-semibold">Office/Desk Work:</p>
                    <p class="text-sm">3-5 days (or sooner if you can work remotely and don't mind visible redness)</p>
                  </div>
                  <div>
                    <p class="font-semibold">Physical Labor/Active Jobs:</p>
                    <p class="text-sm">7-10 days (avoid activities that cause sweating or strain)</p>
                  </div>
                  <div>
                    <p class="font-semibold">Public-Facing Roles:</p>
                    <p class="text-sm">5-7 days (until redness and scabbing are less visible)</p>
                  </div>
                </div>
                <p class="mt-3 text-sm bg-white p-3 rounded">Tip: Many patients schedule procedures before a weekend or holiday week to maximize recovery time.</p>
              </div>
            </div>

            <div class="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-green-900 mb-3">Q: Can I wear a hat after surgery?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Yes, but with specific guidelines:</p>
                <div class="ml-4 space-y-2">
                  <p><strong>First 3-5 Days:</strong> No hats recommended. If absolutely necessary, wear a very loose, soft cap that doesn't touch the grafts.</p>
                  <p><strong>Days 5-10:</strong> Loose-fitting hats are okay. Avoid tight bands or pressure on graft areas.</p>
                  <p><strong>After 10 Days:</strong> Normal hats are fine once scabs have fallen off.</p>
                </div>
                <p class="mt-3 text-sm italic bg-white p-3 rounded">The clinic may provide a special post-op cap for sun protection and discretion.</p>
              </div>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-yellow-900 mb-3">Q: When can I exercise again?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Gradual return to exercise:</p>
                <div class="ml-4 space-y-3">
                  <div>
                    <p class="font-semibold">Week 1:</p>
                    <p class="text-sm">Light walking only. No activities causing sweating or increased heart rate.</p>
                  </div>
                  <div>
                    <p class="font-semibold">Week 2:</p>
                    <p class="text-sm">Light cardio (brisk walking, easy cycling). Avoid heavy lifting.</p>
                  </div>
                  <div>
                    <p class="font-semibold">Weeks 3-4:</p>
                    <p class="text-sm">Moderate exercise okay. Still avoid contact sports.</p>
                  </div>
                  <div>
                    <p class="font-semibold">After 4 Weeks:</p>
                    <p class="text-sm">Full return to all activities including weightlifting, swimming, contact sports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-orange-900 mb-3">Q: Is swelling normal? How do I manage it?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Swelling is very common and expected:</p>
                <div class="ml-4 space-y-2">
                  <p><strong>Timeline:</strong> Typically appears on days 2-3 post-op, peaks on day 4-5, subsides by day 7</p>
                  <p><strong>Location:</strong> Forehead and sometimes around eyes (due to gravity)</p>
                </div>
                <div class="bg-white p-4 rounded mt-3">
                  <p class="font-semibold mb-2">Management Tips:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li>• Sleep with head elevated (45-degree angle) for first week</li>
                    <li>• Apply cold compresses to forehead (NOT directly on grafts)</li>
                    <li>• Avoid bending over or heavy lifting</li>
                    <li>• Take prescribed anti-inflammatory medication</li>
                    <li>• Stay well-hydrated</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-teal-900 mb-3">Q: What about alcohol and smoking after surgery?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Both should be avoided during recovery:</p>
                <div class="ml-4 space-y-3">
                  <div>
                    <p class="font-semibold text-red-700">Alcohol:</p>
                    <p class="text-sm">Avoid for at least 7 days (preferably 2 weeks). Thins blood, increases bleeding/swelling, interacts with medications.</p>
                  </div>
                  <div>
                    <p class="font-semibold text-red-700">Smoking:</p>
                    <p class="text-sm">Avoid for 4 weeks minimum (2 weeks before, 2 weeks after - longer is better). Restricts blood flow, impairs healing, reduces graft survival rate.</p>
                  </div>
                </div>
                <p class="mt-3 text-sm font-semibold text-red-700 bg-white p-3 rounded">Warning: Smoking significantly compromises results. If you cannot quit, discuss this honestly with your surgeon beforehand.</p>
              </div>
            </div>

            <div class="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg">
              <h3 class="text-lg font-bold text-pink-900 mb-3">Q: Can I dye or style my hair after transplant?</h3>
              <div class="text-gray-700 space-y-3">
                <p><strong>A:</strong> Wait appropriate periods:</p>
                <div class="ml-4 space-y-3">
                  <div>
                    <p class="font-semibold">Hair Coloring/Dyeing:</p>
                    <p class="text-sm">Wait 4-6 weeks minimum. Use ammonia-free, gentle formulas when you resume.</p>
                  </div>
                  <div>
                    <p class="font-semibold">Heat Styling (blow dryers, straighteners):</p>
                    <p class="text-sm">Wait 2-3 weeks. Use low heat settings initially.</p>
                  </div>
                  <div>
                    <p class="font-semibold">Haircuts:</p>
                    <p class="text-sm">Scissors cut after 3-4 weeks. Clippers in donor area after 4-6 weeks.</p>
                  </div>
                  <div>
                    <p class="font-semibold">Gels/Styling Products:</p>
                    <p class="text-sm">Wait 4 weeks to avoid follicle irritation or clogging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-amber-50 border-2 border-amber-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">When to Contact Your Surgeon</h3>
            <p class="text-gray-700 mb-3">Reach out immediately if you experience:</p>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-red-600 mr-3">⚠️</span><span>Excessive bleeding that doesn't stop with gentle pressure</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3">⚠️</span><span>Signs of infection (increasing pain, pus, foul odor, fever over 101°F)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3">⚠️</span><span>Severe or worsening pain not relieved by medication</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3">⚠️</span><span>Allergic reaction symptoms (rash, difficulty breathing)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3">⚠️</span><span>Any concerns that feel abnormal or worrying</span></li>
            </ul>
            <p class="text-sm text-gray-600 mt-4 italic">Most complications are rare, but early detection and treatment are important. Don't hesitate to call - your surgical team is there to support you.</p>
          </div>
        </div>
      `
    },
    {
      id: 10,
      title: 'Choosing the Right Hair Restoration Clinic',
      author: 'Editorial',
      date: 'December 2, 2024',
      readTime: '8 min read',
      category: 'Education',
      summary: 'Essential checklist for evaluating clinics and surgeons before making your decision.',
      image: 'https://images.pexels.com/photos/3952245/pexels-photo-3952245.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Choosing the right hair restoration clinic is one of the most important decisions you'll make in your hair loss journey. The surgeon's skill and clinic quality directly impact your results and safety. Here's your comprehensive evaluation guide.</p>

          <div class="bg-red-50 border-2 border-red-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-red-900 mb-3">⚠️ Warning Signs: Red Flags to Avoid</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Surgeon is not board-certified or lacks proper credentials</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Clinic cannot or will not provide before/after photos of actual patients</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Promises "guaranteed" or "miraculous" results</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>High-pressure sales tactics or limited-time offers to rush your decision</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Technicians perform surgery instead of the doctor</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Unwilling to provide patient references or reviews</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>Price significantly lower than industry average (too good to be true)</span></li>
              <li class="flex items-start"><span class="text-red-600 mr-3 font-bold">✗</span><span>No clear policy on complications or follow-up care</span></li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Step 1: Verify Credentials & Experience</h3>
            <div class="space-y-4">
              <div class="bg-blue-50 p-5 rounded-lg">
                <p class="font-bold text-blue-900 mb-3">Surgeon Qualifications Checklist</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3">□</span>
                    <div>
                      <p class="font-semibold">Board Certification</p>
                      <p class="text-sm">Dermatology, Plastic Surgery, or specific Hair Restoration certification</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3">□</span>
                    <div>
                      <p class="font-semibold">Specialized Training</p>
                      <p class="text-sm">Fellowship or advanced training in hair restoration surgery</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3">□</span>
                    <div>
                      <p class="font-semibold">Experience</p>
                      <p class="text-sm">Minimum 5 years performing hair transplants, 500+ procedures completed</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3">□</span>
                    <div>
                      <p class="font-semibold">Professional Memberships</p>
                      <p class="text-sm">ISHRS (International Society of Hair Restoration Surgery), ABHRS (American Board of Hair Restoration Surgery)</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 mr-3">□</span>
                    <div>
                      <p class="font-semibold">Published Work/Research</p>
                      <p class="text-sm">Contributions to the field through papers, presentations, or teaching</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-700"><strong>How to Verify:</strong> Check medical board websites, professional society directories, and ask directly during consultation. Legitimate surgeons are proud to share their credentials.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Step 2: Evaluate the Facility</h3>
            <div class="bg-green-50 p-6 rounded-lg">
              <p class="font-bold text-green-900 mb-3">Facility Standards Checklist</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <ul class="space-y-2 text-sm text-gray-700">
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Clean, modern, well-maintained environment</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Proper licensing and accreditation</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>State-of-the-art equipment</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Emergency equipment available</span></li>
                  </ul>
                </div>
                <div>
                  <ul class="space-y-2 text-sm text-gray-700">
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Trained, certified staff</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Private consultation rooms</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Comfortable surgical suite</span></li>
                    <li class="flex items-start"><span class="text-green-600 mr-2">✓</span><span>Professional, helpful staff</span></li>
                  </ul>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-4 italic">Trust your instincts: If the facility feels unprofessional or makes you uncomfortable, look elsewhere.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Step 3: Review Before/After Photos</h3>
            <div class="bg-purple-50 p-6 rounded-lg">
              <p class="text-gray-700 mb-4">Before/after photos are critical for assessing surgical skill. Look for:</p>
              <div class="space-y-3 text-gray-700">
                <div class="flex items-start">
                  <span class="text-purple-600 mr-3 font-bold">1.</span>
                  <div>
                    <p class="font-semibold">Quality & Quantity</p>
                    <p class="text-sm">Multiple photos (20+) of different patients, various angles, good lighting</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-purple-600 mr-3 font-bold">2.</span>
                  <div>
                    <p class="font-semibold">Similar Cases to Yours</p>
                    <p class="text-sm">Results from patients with your age, hair type, and loss pattern</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-purple-600 mr-3 font-bold">3.</span>
                  <div>
                    <p class="font-semibold">Natural Results</p>
                    <p class="text-sm">Hairlines look natural, appropriate density, proper angles</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-purple-600 mr-3 font-bold">4.</span>
                  <div>
                    <p class="font-semibold">Consistent Quality</p>
                    <p class="text-sm">All photos show good outcomes (not just cherry-picked best cases)</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-purple-600 mr-3 font-bold">5.</span>
                  <div>
                    <p class="font-semibold">Documented Results</p>
                    <p class="text-sm">Photos clearly labeled with procedure type, graft count, timeline</p>
                  </div>
                </div>
              </div>
              <div class="bg-yellow-50 p-3 rounded mt-4">
                <p class="text-sm text-gray-700"><strong>Ask:</strong> "Can I see photos of patients with similar hair loss patterns to mine?" and "What percentage of your patients achieve these types of results?"</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Step 4: The Consultation Assessment</h3>
            <div class="space-y-4">
              <div class="bg-amber-50 p-5 rounded-lg">
                <p class="font-bold text-amber-900 mb-3">What a Good Consultation Includes:</p>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Comprehensive Scalp Examination:</strong> Microscopic analysis of hair and scalp health</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Medical History Review:</strong> Discussion of health conditions, medications, family history</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Realistic Expectations:</strong> Honest discussion about what can and cannot be achieved</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Multiple Treatment Options:</strong> Explanation of surgical and non-surgical options</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Customized Plan:</strong> Personalized approach for your specific case</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Risk Discussion:</strong> Clear explanation of potential complications and how they're managed</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-3">✓</span><span><strong>Time for Questions:</strong> Unhurried consultation where all concerns are addressed</span></li>
                </ul>
              </div>

              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-semibold text-gray-900 mb-2">Questions to Ask During Consultation:</p>
                <ul class="space-y-1 text-sm text-gray-700 ml-4">
                  <li>• "How many procedures do you personally perform per year?"</li>
                  <li>• "Will you personally perform my entire surgery?"</li>
                  <li>• "What is your graft survival rate?"</li>
                  <li>• "What technique do you recommend for me and why?"</li>
                  <li>• "What's your complication rate and how do you handle them?"</li>
                  <li>• "What's included in follow-up care?"</li>
                  <li>• "Can I speak with previous patients?"</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Step 5: Check Reviews & References</h3>
            <div class="bg-teal-50 p-6 rounded-lg">
              <p class="font-bold text-teal-900 mb-3">Where to Look:</p>
              <div class="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p class="font-semibold mb-2">Online Reviews:</p>
                  <ul class="text-sm space-y-1 ml-4">
                    <li>• Google Reviews</li>
                    <li>• RealSelf</li>
                    <li>• Yelp</li>
                    <li>• Healthgrades</li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold mb-2">Direct Sources:</p>
                  <ul class="text-sm space-y-1 ml-4">
                    <li>• Patient testimonials (video preferred)</li>
                    <li>• Patient references provided by clinic</li>
                    <li>• Hair loss forums and communities</li>
                    <li>• Medical board records</li>
                  </ul>
                </div>
              </div>
              <div class="bg-white p-4 rounded mt-4">
                <p class="text-sm text-gray-700"><strong>What to Look For:</strong> Consistent patterns in feedback (both positive and negative), how clinic responds to negative reviews, overall satisfaction trends, specific mentions of results and care quality.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Step 6: Understand Costs & Payment</h3>
            <div class="bg-blue-50 p-6 rounded-lg">
              <p class="text-gray-700 mb-4">Get complete transparency on pricing:</p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-blue-600 mr-3">$</span><span><strong>Total Cost Breakdown:</strong> Surgery, anesthesia, medications, follow-up visits</span></li>
                <li class="flex items-start"><span class="text-blue-600 mr-3">$</span><span><strong>Payment Plans:</strong> Available financing options and terms</span></li>
                <li class="flex items-start"><span class="text-blue-600 mr-3">$</span><span><strong>Revision Policy:</strong> What happens if results are unsatisfactory</span></li>
                <li class="flex items-start"><span class="text-blue-600 mr-3">$</span><span><strong>Hidden Fees:</strong> Ask about any additional costs not in initial quote</span></li>
              </ul>
              <div class="bg-yellow-50 p-4 rounded mt-4">
                <p class="text-sm text-gray-700"><strong>Remember:</strong> Price should not be the deciding factor. The cheapest option often means lower quality. That said, the most expensive doesn't guarantee the best results. Focus on value - skill, experience, and comprehensive care at a fair price.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border-2 border-green-600 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-green-900 mb-4">Final Decision Checklist</h3>
            <p class="text-gray-700 mb-3">Before committing, ensure you can answer "yes" to:</p>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>The surgeon is board-certified with extensive hair restoration experience</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>You've seen multiple before/after photos of similar cases</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>The facility is clean, modern, and accredited</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>Reviews and references are mostly positive and genuine</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>You feel comfortable and trust the surgeon</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>All your questions were answered thoroughly</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>Expectations have been set realistically</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>Pricing is transparent with no surprise fees</span></li>
              <li class="flex items-start"><span class="text-green-600 mr-3">□</span><span>Comprehensive follow-up care is included</span></li>
            </ul>
          </div>

          <div class="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <h3 class="text-xl font-bold text-amber-900 mb-3">Trust Your Instincts</h3>
            <p class="text-gray-700">Beyond checklists and credentials, pay attention to your gut feeling. A hair transplant is a significant investment and commitment. Choose a surgeon and clinic where you feel heard, respected, and confident. It's okay to consult with multiple clinics before making your decision - this is YOUR body and YOUR results.</p>
          </div>
        </div>
      `
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visiblePosts < blogs.length) {
          setVisiblePosts((prev) => Math.min(prev + 3, blogs.length));
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [visiblePosts, blogs.length]);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
      <>
      <SEO
        title="The Golden Gem Clinic Chennai | Expert Blog Updates"
        description="Read the latest on hair transplants, aftercare tips, and cosmetic clinic insights from The Golden Gem — your trusted source for hair restoration knowledge."
        canonical="https://thegoldengemhairclinic.com/blog"
      />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {blogs.slice(0, visiblePosts).map((blog, index) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight hover:text-amber-700 transition-colors">
                    {blog.title}
                  </h2>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <User className="w-4 h-4" />
                    <span>By {blog.author}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{blog.summary}</p>

                  <button
                    onClick={() => toggleExpanded(blog.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {expandedId === blog.id ? (
                      <>
                        <ChevronUp className="w-5 h-5" />
                        Show Less
                      </>
                    ) : (
                      <>
                        Read Full Article
                        <ChevronDown className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {expandedId === blog.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-8 md:p-12 animate-fadeIn">
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-amber-600 hover:prose-a:text-amber-700"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        {visiblePosts < blogs.length && (
          <div ref={observerTarget} className="py-12 text-center">
            <div className="inline-flex items-center gap-2 text-amber-700">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-700"></div>
              <span className="font-medium">Loading more articles...</span>
            </div>
          </div>
        )}

        {visiblePosts >= blogs.length && (
          <div className="py-12 text-center">
            <p className="text-gray-500 text-lg">You've reached the end of our blog posts</p>
          </div>
        )}
      </main>
              <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
    </>
  );
}
