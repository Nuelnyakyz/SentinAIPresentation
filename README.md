# SentinAI Presentation Site

This is a standalone Flask website to present the SentinAI project.

## 📂 Structure

- `app.py`: The Flask server.
- `templates/index.html`: The main presentation page.
- `static/css/style.css`: Styling (Premium Dark Mode).
- `static/images/`: **Place your screenshots here.**

## 🚀 How to Run

1. Ensure Flask is installed:
   ```bash
   pip install flask
   ```
2. Run the application:
   ```bash
   python3 app.py
   ```
3. Open your browser at: `http://localhost:8080`

## 📸 Adding Screenshots

Place the following image files in the `static/images/` folder to populate the showcase sections:

1. `metrics_graph.png` - Screenshot of the MetricsPulse graphs.
2. `behavior_table.png` - Screenshot of the UserBehaviorPulse table.
3. `ai_explanation.png` - Screenshot of the AI Explanation card.
4. `telegram_alert.png` - Screenshot of a Telegram notification.

The website will automatically load them. If an image is missing, a placeholder will be shown.
