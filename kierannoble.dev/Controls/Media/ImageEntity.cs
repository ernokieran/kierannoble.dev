namespace kierannoble.dev.Controls.Media;

public class ImageEntity
{
    public int Width { get; set; }
    public int Height { get; set; }
    public decimal Ratio => decimal.Divide(Width, Height);
}