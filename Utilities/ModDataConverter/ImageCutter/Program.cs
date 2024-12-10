using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;

namespace ImageCutter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 2)
            {
                Console.WriteLine($"2 arguments were expected: sourcePath and destinationPath, but {args.Length} were received");
                return;
            }

            string sourcePath = args[0];
            string destinationPath = args[1];

            if (!Directory.Exists(sourcePath))
            {
                Console.WriteLine($"Source path \"{sourcePath}\" does not exist");
                return;
            }

            sourcePath = Path.GetFullPath(sourcePath);

            if (!Directory.Exists(destinationPath))
            {
                Console.WriteLine($"Destination path \"{destinationPath}\" does not exist");
                return;
            }

            string[] sourcePngPaths = Directory.GetFiles(sourcePath, "*.png", SearchOption.AllDirectories);

            foreach (string sourcePngPath in sourcePngPaths)
            {
                string destinationPngPath = GetDestinationFilePath(sourcePngPath, sourcePath, destinationPath);

                using Image<Rgba32> image = Image.Load<Rgba32>(sourcePngPath);

                image.Mutate(img => img.Crop(new Rectangle(0, 0, image.Height, image.Height)));


                Directory.CreateDirectory(Path.GetDirectoryName(destinationPngPath)!);
                image.Save(destinationPngPath);
            }
        }

        public static string GetDestinationFilePath(string sourcePath, string sourceRoot, string destinationRoot)
        {
            if (sourcePath.StartsWith(sourceRoot))
            {
                string namePath = sourcePath.Substring(sourceRoot.Length + 1);

                //destinationRoot = destinationRoot.Replace(Path.AltDirectorySeparatorChar, Path.DirectorySeparatorChar);
                //namePath = namePath.Replace(Path.AltDirectorySeparatorChar, Path.DirectorySeparatorChar);

                return Path.Combine(destinationRoot, namePath);
            }
            else
            {
                throw new NotImplementedException($"Folder link type used for file {sourcePath} is not supported");
            }
        }
    }
}
