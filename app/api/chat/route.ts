import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Your OpenRouter API key
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Call OpenRouter API with DeepSeek R1 model
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.YOUR_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Agricultural AI Chatbot',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1', // DeepSeek R1 model
        messages: [
          {
            role: 'system',
            content: 'You are an expert agricultural assistant chatbot. You provide helpful, accurate, and practical advice about farming, crops, plant diseases, pest control, soil management, and agricultural techniques. You can communicate in both Bengali and English. Be friendly, knowledgeable, and provide actionable advice to farmers and agricultural enthusiasts.'
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenRouter API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from AI model' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content || 'দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।';

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}